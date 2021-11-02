import { ObjectParser } from './ObjectParser';

export interface Parser {
  isCompressed: boolean;
  isJson: boolean;
  fromField: string | undefined;
  parse(data: any): Record<string, any>;
  serialize(data: any): Record<string, any> | string | Buffer;
}

function createFactoryFunction<A extends any[], R>(
  constructor: new (...args: A) => R
): (...args: A) => R {
  return (...args) => new constructor(...args);
}

export default createFactoryFunction(ObjectParser);
