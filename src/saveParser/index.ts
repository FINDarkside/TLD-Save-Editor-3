import { ObjectParser } from './ObjectParser';

export interface Parser {
  fromField: string | undefined;
  parse(data: any): any;
  serialize(data: any): any;
}

function createFactoryFunction<A extends any[], R>(
  constructor: new (...args: A) => R
): (...args: A) => R {
  return (...args) => new constructor(...args);
}

export default createFactoryFunction(ObjectParser);
