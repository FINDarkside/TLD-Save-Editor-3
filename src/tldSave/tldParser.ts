import { fstat, readFileSync, writeFileSync } from 'fs';
import lzf from 'lzfjs';
import type InventorySaveDataProxy from './types/generated/InventorySaveDataProxy';
import type GameManagerSaveDataProxy from './types/generated/GameManagerSaveDataProxy';
import type GlobalSaveGameFormat from './types/generated/GlobalSaveGameFormat';
import type HudManagerSaveDataProxy from './types/generated/HudManagerSaveDataProxy';
import type SlotData from './types/generated/SlotData';
import parse from './index';

const tldParser = parse({
  m_Dict: parse({
    global: parse({
      inventory: parse()
        .from('m_Inventory_Serialized')
        .json()
        .withFields<InventorySaveDataProxy>(),
    })
      .json()
      .compressed()
      .withFields<GlobalSaveGameFormat>(),
  }),
})
  .json()
  .compressed()
  .withFields<SlotData>();

export default function asd() {
  const buf = readFileSync(
    'C:/Users/FINDarkside/AppData/Local/Hinterland/TheLongDark/sandbox1'
  );

  const saveData = tldParser.parse(buf);

  // @ts-ignore
  // console.log(saveData.m_Name, saveData.m_Dict.global.inventory);
  const buf2 = tldParser.serialize(saveData);
  console.log(buf.length, buf2.length);
  writeFileSync('original.json', JSON.stringify(saveData, null, 2));

  const saveData2 = tldParser.parse(buf2);
  writeFileSync('nonOriginal.json', JSON.stringify(saveData2, null, 2));
  writeFileSync('original.save', buf2);
  //const decompressed = lzf.decompress(buf).toString();
  //const textEncoder = new TextEncoder();
  //const buf2 = lzf.compress(textEncoder.encode(decompressed));
  // return;
  /*  writeFileSync(
    'C:/Users/FINDarkside/AppData/Local/Hinterland/TheLongDark/sandbox1-asd.json',
    buf2
  ); */
}

asd();
