import { assert, expect, test, describe, it } from 'vitest';
import { parseObject } from 'src/tldSave/parser';

type ObjWithInfinity = {
  val: number;
};

type ObjWithBigNumber = {
  val: number | bigint;
};

describe('Parser', () => {
  test('Parses Infinity correctly', () => {
    const parser = parseObject().json().withFields<ObjWithInfinity>();
    const result = parser.parse('{"val": Infinity}');
    expect(result?.val).toEqual(Number.POSITIVE_INFINITY);
  });

  test('Parses -Infinity correctly', () => {
    const parser = parseObject().json().withFields<ObjWithInfinity>();
    const result = parser.parse('{"val": -Infinity}');
    expect(result?.val).toEqual(Number.NEGATIVE_INFINITY);
  });

  test('Parses NaN correctly', () => {
    const parser = parseObject().json().withFields<ObjWithInfinity>();
    const result = parser.parse('{"val": NaN}');
    expect(Number.isNaN(result?.val)).toBeTruthy();
  });

  test('Serializes Infinity correctly', () => {
    const parser = parseObject().json().withFields<ObjWithInfinity>();
    const json = parser.serialize({ val: Number.POSITIVE_INFINITY });
    expect(json).toEqual('{"val":Infinity}');
  });

  test('Serializes -Infinity correctly', () => {
    const parser = parseObject().json().withFields<ObjWithInfinity>();
    const json = parser.serialize({ val: Number.NEGATIVE_INFINITY });
    expect(json).toEqual('{"val":-Infinity}');
  });

  test('Serializes NaN correctly', () => {
    const parser = parseObject().json().withFields<ObjWithInfinity>();
    const json = parser.serialize({ val: Number.NaN });
    expect(json).toEqual('{"val":NaN}');
  });

  test('Parses big numbers correctly', () => {
    const parser = parseObject().json().withFields<ObjWithInfinity>();
    const json = parser.parse('{"val":9223372036854775807}');
    expect(json?.val).toEqual(BigInt('9223372036854775807'));
  });

  test("Doesn't parse small numbers to BigInt", () => {
    const parser = parseObject().json().withFields<ObjWithInfinity>();
    const json = parser.parse('{"val":34}');
    expect(json?.val).toBeTypeOf('number');
  });

  test('Serializes big numbers correctly', () => {
    const parser = parseObject().json().withFields<ObjWithInfinity>();
    const json = parser.serialize({ val: BigInt('9223372036854775807') });
    expect(json).toEqual('{"val":9223372036854775807}');
  });
});
