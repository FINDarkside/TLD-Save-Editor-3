import { assert, expect, test } from 'vitest';
import { parseObject } from 'src/tldSave/parser';

type ObjWithInfinity = {
  val: number;
};

test.skip('Parser', () => {
  const parser = parseObject().json().withFields<ObjWithInfinity>();
  const result = parser.parse('{"val": Infinity}');
  expect(result?.val).toEqual(Number.POSITIVE_INFINITY);
});
