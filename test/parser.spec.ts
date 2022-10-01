import { assert, expect, test, describe, it } from 'vitest';
import { parseObject } from 'src/tldSave/parser';

type ObjWithInfinity = {
  val: number;
};

describe('Parser', () => {
  test('Parses Infinity correctly', () => {
    const parser = parseObject().json().withFields<ObjWithInfinity>();
    const result = parser.parse('{"val": Infinity}');
    expect(result?.val).toEqual(Number.POSITIVE_INFINITY);
  });
});
