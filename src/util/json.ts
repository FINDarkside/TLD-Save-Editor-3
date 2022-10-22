const JSONbigNative = require('json-bigint')({ useNativeBigInt: true });

// TLD contains invalid JSON which has Infinity, -Infinity and possibly NaN.
// JSON.parse doesn't support this invalid json so we replace use this token and just replace it with Infinity after serialization
const infinityToken = 'FsClnI9';
const negativeInfinityToken = 'LmWSdX0';
const nanToken = 'EyKTDu6';

const infinityRegex = new RegExp(`"${infinityToken}"`, 'g');
const negativeInfinityRegex = new RegExp(`"${negativeInfinityToken}"`, 'g');
const nanRegex = new RegExp(`"${nanToken}"`, 'g');

function parse(json?: string) {
  if (json == null) return json;
  if (json == '') return null;
  // We could use JSON5 but it's over 100% slower than this
  const preProcessedJson = json
    .replaceAll(/("[A-Za-z_@0-9]+"): *Infinity/g, `\$1:"${infinityToken}"`)
    .replaceAll(
      /("[A-Za-z_@0-9]+"): *-Infinity/g,
      `\$1:"${negativeInfinityToken}"`
    )
    .replaceAll(
      /("[A-Za-z_@0-9]+"): *NaN/g,
      // Have to use token with NaN
      `\$1:"${nanToken}"`
    );

  return JSONbigNative.parse(preProcessedJson, (key: string, value: any) => {
    if (value === nanToken) return NaN;
    if (value === infinityToken) return Infinity;
    if (value === negativeInfinityToken) return -Infinity;
    return value;
  });
}

function stringify(json: any) {
  const result = JSONbigNative.stringify(json, (key: string, value: any) => {
    if (value === Infinity) return infinityToken;
    if (value === -Infinity) return negativeInfinityToken;
    if (Number.isNaN(value)) return nanToken;
    return value === Infinity ? infinityToken : value;
  });

  return result
    .replaceAll(infinityRegex, 'Infinity')
    .replaceAll(negativeInfinityRegex, '-Infinity')
    .replaceAll(nanRegex, 'NaN');
}

export default {
  parse,
  stringify,
};
