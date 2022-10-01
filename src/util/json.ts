import JSON5 from 'json5';

function parse(json?: string) {
  if (!json) return json;
  return JSON5.parse(json);
  // return JSON.parse(json.replaceAll('Infinity', '0'));
}

function stringify(json: string) {
  return JSON.stringify(json, (key, value) => {
    return value === Infinity ? 'Infinity' : value;
  });
}

export default {
  parse,
  stringify,
};
