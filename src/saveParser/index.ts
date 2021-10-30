export abstract class Parser {
  abstract parse(data: any): any;
  abstract serialize(data: any): any;
}

type A = { b: number };
type B = any;

type X = CastAny<B, {}>;

interface ObjectParserArg {
  [key: string]: Parser;
}

type ObjectParserParseReturn<T extends ObjectParserArg> = {
  [key in keyof T]: ReturnType<T[key]['parse']>;
};

type ObjectParserSerializeReturn<T extends ObjectParserArg> = {
  [key in keyof T]: ReturnType<T[key]['serialize']>;
};

export class ObjectParser<
  T extends ObjectParserArg,
  ExtraFields
> extends Parser {
  private fields: Array<[string, Parser]>;

  constructor(fields: T) {
    super();
    this.fields = Object.entries(fields);
  }

  parse(data: { [key in keyof T]: any }) {
    const result = { ...data } as { [key: string]: any };
    for (const [key, parser] of this.fields) {
      result[key] = parser.parse(data[key]);
    }
    return result as CastAny<ExtraFields, {}> & ObjectParserParseReturn<T>;
  }

  serialize(data: { [key in keyof T]: any }) {
    const result = { ...data } as { [key: string]: any };
    for (const [key, parser] of this.fields) {
      result[key] = parser.serialize(data[key]);
    }
    return result as CastAny<ExtraFields, {}> & ObjectParserSerializeReturn<T>;
  }

  withType<NonParseableTypes extends Record<string, any>>() {
    return this as unknown as ObjectParser<T, NonParseableTypes>;
  }
}

const testParser = new ObjectParser({
  global: new ObjectParser({
    asd: new ObjectParser({}).withType<{ field: boolean }>(),
  }),
}).withType<{
  lang: string;
  key: number;
}>();

const res = testParser.parse({ global: { field: 3 } } as any);
