import { ArrayParser } from './ArrayParser';
import { ObjectParser } from './ObjectParser';
import { ValueParser } from './ValueParser';

function createFactoryFunction<A extends any[], R>(
  constructor: new (...args: A) => R
): (...args: A) => R {
  return (...args) => new constructor(...args);
}

const parseObject = createFactoryFunction(ObjectParser);
const parseArray = createFactoryFunction(ArrayParser);
const parseValue = createFactoryFunction(ValueParser);

export { parseObject, parseArray, parseValue };
