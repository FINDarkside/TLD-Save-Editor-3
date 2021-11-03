import { fstat, readFileSync, writeFileSync } from 'fs';
import lzf from 'lzfjs';
import InventorySaveDataProxy from 'saveTypes/generated/InventorySaveDataProxy';
import GameManagerSaveDataProxy from '../saveTypes/generated/GameManagerSaveDataProxy';
import GlobalSaveGameFormat from '../saveTypes/generated/GlobalSaveGameFormat';
import HudManagerSaveDataProxy from '../saveTypes/generated/HudManagerSaveDataProxy';
import SlotData from '../saveTypes/generated/SlotData';
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
    'C:/Users/FINDarkside/AppData/Local/Hinterland/TheLongDark/sandbox5'
  );

  const bufa = Buffer.alloc(10);
  const uintArray = new Uint8Array(10);

  const saveData = tldParser.parse(buf);
  writeFileSync('dump.json', JSON.stringify(saveData, null, 2));
  console.log(saveData.m_Name, saveData.m_Dict.global.inventory);
  saveData.m_Dict.global.inventory.m_SerializedItems.splice(1);
  const buf2 = tldParser.serialize(saveData);
  console.log(buf.length, buf2.length);
  //const decompressed = lzf.decompress(buf).toString();
  //const textEncoder = new TextEncoder();
  //const buf2 = lzf.compress(textEncoder.encode(decompressed));
  // return;
  writeFileSync(
    'C:/Users/FINDarkside/AppData/Local/Hinterland/TheLongDark/sandbox5',
    buf2
  );
}
