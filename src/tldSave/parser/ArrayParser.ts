import json from 'src/util/json';
import Parser, { ParserOptions } from './Parser';

export class ArrayParser<
  T extends Parser,
  SerializedType = ReturnType<T['parse']>[]
> {
  protected parser: T;

  fromField: string | undefined;
  isJson: boolean | undefined;
  isCompressed: boolean | undefined;

  constructor(parser: T) {
    this.parser = parser;
  }

  parse(data: SerializedType, options?: ParserOptions) {
    if (!data) return null;
    const arr = this.preProcessData(data);
    return arr.map((item) => this.parser.parse(item), options) as ReturnType<
      T['parse']
    >[];
  }

  private preProcessData(data: any) {
    let result = data;
    if (this.isJson) {
      result = JSON.parse(result as string);
    }
    return result as ReturnType<T['parse']>[];
  }

  serialize(data: ReturnType<T['parse']>[]): SerializedType {
    const result = data.map((item) => this.parser.serialize(item));
    if (!this.isJson) return result as SerializedType;
    return json.stringify(result) as SerializedType;
  }

  from(field: string) {
    const newParser = this.clone();
    newParser.fromField = field;
    return newParser as unknown as ArrayParser<T>;
  }

  json() {
    const newParser = this.clone();
    newParser.isJson = true;
    return newParser as unknown as ArrayParser<T>;
  }

  private clone() {
    const newParser = new ArrayParser(this.parser);
    newParser.isJson = this.isJson;
    newParser.isCompressed = this.isCompressed;
    newParser.fromField = this.fromField;
    return newParser as unknown as ArrayParser<T>;
  }
}
