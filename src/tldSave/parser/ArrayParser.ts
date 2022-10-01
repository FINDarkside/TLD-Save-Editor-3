import Parser, { ParserOptions } from './Parser';

export class ArrayParser<T extends Parser> {
  protected parser: T;

  fromField: string | undefined;
  isJson: boolean | undefined;
  isCompressed: boolean | undefined;

  constructor(parser: T) {
    this.parser = parser;
  }

  parse(data: Array<ReturnType<T['serialize']>>, options?: ParserOptions) {
    if (!data) return null;
    return data.map((item) => this.parser.parse(item), options) as ReturnType<
      T['parse']
    >[];
  }

  serialize(data: ReturnType<T['parse']>[]) {
    return data.map((item) => this.parser.serialize(item));
  }

  from(field: string) {
    this.fromField = field;
    return this;
  }
}
