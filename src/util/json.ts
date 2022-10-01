import JSON5 from 'json5';

// TLD contains invalid JSON which has Infinity, -Infinity and possibly NaN.
// JSON.parse doesn't support this invalid json so we replace use this token and just replace it with Infinity after serialization
const infinityToken = 'FsClnI9';
const negativeInfinityToken = 'LmWSdX0';
const nanToken = 'EyKTDu6';

const infinityRegex = new RegExp(`"${infinityToken}"`, 'g');
const negativeInfinityRegex = new RegExp(`"${negativeInfinityToken}"`, 'g');
const nanRegex = new RegExp(`"${nanToken}"`, 'g');

function parse(json?: string) {
  if (!json) return json;
  return JSON5.parse(json);
  // return JSON.parse(json.replaceAll('Infinity', '0'));
}

function stringify(json: any) {
  const result = JSON.stringify(json, (key, value) => {
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
