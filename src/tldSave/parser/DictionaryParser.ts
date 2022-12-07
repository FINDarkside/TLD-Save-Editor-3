import lzf from 'lzfjs';
import JSON5 from 'json5';
import Parser, { ParserOptions } from './Parser';
import JSON from 'src/util/json';

type ObjParsedType<T extends Parser> = {
  [key: string]: ReturnType<T['parse']>;
};

type ObjSerializedType<T extends Parser> = {
  // Not sure why this needs to be wrapped in NonNullable to keep return types
  [key: string]: Optional<NonNullable<ReturnType<T['serialize']>>>;
};

const textEncoder = new TextEncoder();

export class DictionaryParser<
  T extends Parser,
  ExtraFields = {},
  SerializedType = ObjSerializedType<T>
> {
  private parser: T;
  isJson = false;
  isCompressed = false;
  fromField: string | undefined;

  constructor(parser: T) {
    this.parser = parser;
  }

  parse(data: SerializedType, options?: ParserOptions) {
    if (data == null) return undefined;
    let obj = this.preProcessData(data, options) as ObjSerializedType<T>;

    const result = {} as { [key: string]: any };
    for (const [key, value] of Object.entries(obj)) {
      result[key] = this.parser.parse(value);
    }
    return result as CastAny<ExtraFields, {}> & ObjParsedType<T>;
  }

  private preProcessData(data: any, options?: ParserOptions) {
    let result = data;

    if (this.isCompressed) {
      console.time('decompress');
      result = lzf.decompress(result).toString();
      console.timeEnd('decompress');
    }

    if (this.isJson) {
      // FIXME: Handle this better
      if (options?.useJson5) {
        result = JSON5.parse(result as string);
      } else {
        result = JSON.parse(result as string);
      }
    }
    return result;
  }

  serialize(data: ObjParsedType<T>): Optional<SerializedType> {
    if (data == null) return null;
    let result = {} as Record<string, any>;

    for (let [key, value] of Object.entries(data)) {
      if (this.parser.isCompressed) {
        const buf = this.parser.serialize(value);
        if (buf == null) result[key] = buf;
        // TLD wants binary data as number arrays
        else result[key] = Object.values(buf);
      } else {
        result[key] = this.parser.serialize(value);
      }
    }

    if (!this.isJson) return result as SerializedType;
    const json = JSON.stringify(result);
    if (!this.isCompressed) return json as unknown as SerializedType;
    return lzf.compress(textEncoder.encode(json)) as unknown as SerializedType;
  }

  json() {
    const newParser = this.clone();
    newParser.isJson = true;
    return newParser as unknown as DictionaryParser<T, ExtraFields, string>;
  }

  compressed() {
    if (!this.isJson) throw new Error('Non-json field cannot be compressed');
    const newParser = this.clone();
    newParser.isCompressed = true;
    return newParser as unknown as DictionaryParser<T, ExtraFields, Uint8Array>;
  }

  from(field: string) {
    const newParser = this.clone();
    newParser.fromField = field;
    return newParser;
  }

  private clone() {
    const newParser = new DictionaryParser(this.parser);
    newParser.isJson = this.isJson;
    newParser.isCompressed = this.isCompressed;
    newParser.fromField = this.fromField;
    return newParser as unknown as DictionaryParser<T, ExtraFields, Uint8Array>;
  }
}
