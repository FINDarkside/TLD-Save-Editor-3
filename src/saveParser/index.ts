import { ObjectParser } from './ObjectParser';

export abstract class Parser {
  abstract parse(data: any): any;
  abstract serialize(data: any): any;
}

function createFactoryFunction<A extends any[], R>(
  constructor: new (...args: A) => R
): (...args: A) => R {
  return (...args) => new constructor(...args);
}

export default createFactoryFunction(ObjectParser);
