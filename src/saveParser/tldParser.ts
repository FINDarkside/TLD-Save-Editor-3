import { readFileSync, writeFileSync } from 'fs';
import GameManagerSaveDataProxy from '../saveTypes/generated/GameManagerSaveDataProxy';
import GlobalSaveGameFormat from '../saveTypes/generated/GlobalSaveGameFormat';
import HudManagerSaveDataProxy from '../saveTypes/generated/HudManagerSaveDataProxy';
import SlotData from '../saveTypes/generated/SlotData';
import parse from './index';

const tldParser = parse({
  m_Dict: parse({
    global: parse({
      gameManager: parse()
        .json()
        .from('m_GameManagerSerialized')
        .withFields<GameManagerSaveDataProxy>(),
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
    'C:/Users/FINDarkside/AppData/Local/Hinterland/TheLongDark/sandbox4'
  );
  const saveData = tldParser.parse(buf);
  console.log(saveData.m_Dict.global.gameManager);
  const buf2 = tldParser.serialize(saveData);
  console.log(buf.length, buf2.length);
  writeFileSync(
    'C:/Users/FINDarkside/AppData/Local/Hinterland/TheLongDark/sandbox4',
    buf2
  );
}
