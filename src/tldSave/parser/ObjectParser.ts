import lzf from 'lzfjs';
import Parser from './Parser';

interface ObjectParserArg {
  [key: string]: Parser;
}

type ObjParsedType<T extends ObjectParserArg> = {
  [key in keyof T]?: ReturnType<T[key]['parse']>;
};

type ObjSerializedType<T extends ObjectParserArg> = {
  // Not sure why this needs to be wrapped in NonNullable to keep return types
  [key in keyof T]: Optional<NonNullable<ReturnType<T[key]['serialize']>>>;
};

const textEncoder = new TextEncoder();

export class ObjectParser<
  T extends ObjectParserArg = {},
  ExtraFields = {},
  SerializedType = ObjSerializedType<T>
> {
  private fields: Array<[string, Parser]>;
  isJson = false;
  isCompressed = false;
  fromField: string | undefined;
  constructor(fields?: T) {
    this.fields = Object.entries(fields ?? {});
  }

  parse(data: SerializedType) {
    if (data == null) return undefined;
    let obj = this.preProcessData(data) as ObjSerializedType<T>;

    const result = { ...obj } as { [key: string]: any };
    for (const [key, parser] of this.fields) {
      const valueKey = parser.fromField || key;
      const value = obj[valueKey];
      result[key] = parser.parse(value);
    }
    return result as CastAny<ExtraFields, {}> & ObjParsedType<T>;
  }

  private preProcessData(data: any) {
    let result = data;

    if (this.isCompressed) {
      console.time('decompress');
      result = lzf.decompress(result).toString();
      console.timeEnd('decompress');
    }

    if (this.isJson) {
      // FIXME: Handle this better
      result = JSON.parse((result as string).replaceAll('Infinity', '0'));
    }
    return result;
  }

  serialize(data: ObjParsedType<T>): Optional<SerializedType> {
    if (data == null) return null;
    let result = { ...data } as Record<string, any>;

    for (const [key, parser] of this.fields) {
      const resultKey = parser.fromField || key;
      const value = data[key];
      if (parser.isCompressed) {
        const buf = parser.serialize(value);
        if (buf == null) result[resultKey] = buf;
        // TLD wants binary data as number arrays
        else result[resultKey] = Object.values(buf);
      } else {
        result[resultKey] = parser.serialize(value);
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
