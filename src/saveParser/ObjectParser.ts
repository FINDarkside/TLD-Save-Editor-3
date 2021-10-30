import lzf from 'lzfjs';
import { Parser } from './index';

interface ObjectParserArg {
  [key: string]: Parser;
}

type ObjParsedType<T extends ObjectParserArg> = {
  [key in keyof T]: ReturnType<T[key]['parse']>;
};

type ObjSerializedType<T extends ObjectParserArg> = {
  [key in keyof T]: ReturnType<T[key]['serialize']>;
};

const textEncoder = new TextEncoder();

export class ObjectParser<
  T extends ObjectParserArg,
  ExtraFields = {},
  SerializedType = ObjSerializedType<T>
> extends Parser {
  private fields: Array<[string, Parser]>;
  private isJson = false;
  private isCompressed = false;
  constructor(fields: T) {
    super();
    this.fields = Object.entries(fields);
  }

  parse(data: SerializedType) {
    let obj = data as ObjSerializedType<T>;
    if (this.isCompressed) {
      const json = lzf.decompress(data).toString();
      if (!this.isJson) throw new Error('Compression enabled without json');
      obj = JSON.parse(json);
    }
    const result = { ...obj } as { [key: string]: any };
    for (const [key, parser] of this.fields) {
      result[key] = parser.parse(obj[key]);
    }
    return result as CastAny<ExtraFields, {}> & ObjParsedType<T>;
  }

  serialize(data: ObjParsedType<T>): SerializedType {
    let result = { ...data } as Record<string, any>;
    for (const [key, parser] of this.fields) {
      result[key] = parser.serialize(data[key]);
    }
    if (!this.isJson) return result as SerializedType;
    const json = JSON.stringify(result);
    if (!this.isCompressed) json as unknown as SerializedType;
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
    if (this.isJson) throw new Error('Non-json field cannot be compressed');
    this.isCompressed = true;
    return this as unknown as ObjectParser<T, ExtraFields, Uint8Array>;
  }
}
