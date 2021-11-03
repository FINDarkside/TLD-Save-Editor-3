import lzf from 'lzfjs';

interface ObjectParserArg {
  [key: string]: ObjectParser;
}

type ObjParsedType<T extends ObjectParserArg> = {
  [key in keyof T]: ReturnType<T[key]['parse']>;
};

type ObjSerializedType<T extends ObjectParserArg> = {
  [key in keyof T]: ReturnType<T[key]['serialize']>;
};

const textEncoder = new TextEncoder();

export class ObjectParser<
  T extends ObjectParserArg = {},
  ExtraFields = {},
  SerializedType = ObjSerializedType<T>
> {
  private fields: Array<[string, ObjectParser]>;
  protected isJson = false;
  protected isCompressed = false;
  protected fromField: string | undefined;
  constructor(fields?: T) {
    this.fields = Object.entries(fields ?? {});
  }

  parse(data: SerializedType) {
    let obj = this.preProcessData(data) as ObjSerializedType<T>;

    const result = { ...obj } as { [key: string]: any };
    for (const [key, parser] of this.fields) {
      result[key] = parser.parse(obj[parser.fromField || key]);
    }
    return result as CastAny<ExtraFields, {}> & ObjParsedType<T>;
  }

  private preProcessData(data: any) {
    let result = data;
    if (this.isCompressed) result = lzf.decompress(result).toString();
    if (this.isJson) result = JSON.parse(result);
    return result;
  }

  serialize(data: ObjParsedType<T>): SerializedType {
    let result = { ...data } as Record<string, any>;

    for (const [key, parser] of this.fields) {
      const resultKey = parser.fromField || key;
      if (parser.isCompressed) {
        result[resultKey] = Object.values(parser.serialize(data[key]));
      } else {
        result[resultKey] = parser.serialize(data[key]);
      }
      if (parser.fromField) delete result[key];
    }

    if (!this.isJson) return result as SerializedType;
    const json = JSON.stringify(result);
    if (!this.isCompressed) return json as unknown as SerializedType;
    return lzf.compress(textEncoder.encode(json)) as unknown as SerializedType;
  }

  withFields<ExtraFields extends Record<string, any>>() {
    return this as unknown as ObjectParser<T, ExtraFields, SerializedType>;
  }

  json() {
    this.isJson = true;
    return this as unknown as ObjectParser<T, ExtraFields, string>;
  }

  compressed() {
    if (!this.isJson) throw new Error('Non-json field cannot be compressed');
    this.isCompressed = true;
    return this as unknown as ObjectParser<T, ExtraFields, Uint8Array>;
  }

  from(field: string) {
    this.fromField = field;
    return this;
  }
}
