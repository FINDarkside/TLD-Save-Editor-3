import { readFile } from 'fs/promises';
import { bench, describe } from 'vitest';
import tldParser from 'src/tldSave/tldParser';

describe('Deserialize', async () => {
  const data = await readFile('./test/sandbox35');
  const deserialized = tldParser.parse(data)!;

  bench.skip('Native JSON.parse', () => {
    tldParser.parse(data);
  });

  bench.skip('JSON5.parse', () => {
    tldParser.parse(data, { useJson5: true });
  });
});
