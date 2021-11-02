import * as lzf from 'lzfjs';
import { readFile, writeFile } from 'fs/promises';
import asd from './saveParser/tldParser';

function decompressString(s: string) {
  return lzf.decompress(Buffer.from(s));
}

function compressString(s: string) {
  return lzf.compress(Buffer.from(s));
}

const path =
  'C:/Users/FINDarkside/AppData/Local/Hinterland/TheLongDark/sandbox4';

async function loadSave(path: string) {
  const buf = await readFile(path);
  const json = lzf.decompress(buf).toString();
  await writeFile('./dump.json', JSON.stringify(JSON.parse(json), null, 2));
  const saveData = JSON.parse(json);

  const globalJson = decompressString(saveData.m_Dict.global).toString();
  const global = JSON.parse(globalJson);
  //console.log(global);
}
asd();
