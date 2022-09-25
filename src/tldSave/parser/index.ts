import { ArrayParser } from './ArrayParser';
import { ObjectParser } from './ObjectParser';

function createFactoryFunction<A extends any[], R>(
  constructor: new (...args: A) => R
): (...args: A) => R {
  return (...args) => new constructor(...args);
}

const parseObject = createFactoryFunction(ObjectParser);
const parseArray = createFactoryFunction(ArrayParser);

export { parseObject, parseArray };
