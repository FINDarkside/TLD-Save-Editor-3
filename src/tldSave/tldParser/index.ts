import { parseObject } from '../parser';
import type SlotData from '../types/generated/SlotData';
import type BootSaveGameFormat from '../types/generated/BootSaveGameFormat';
import type InfoSaveGameFormat from '../types/generated/InfoSaveGameFormat';
import globalParser from './global';

const tldParser = parseObject({
  m_Dict: parseObject({
    global: globalParser,
    boot: parseObject().json().compressed().withFields<BootSaveGameFormat>(),
    info: parseObject().json().compressed().withFields<InfoSaveGameFormat>(),
  }),
})
  .json()
  .compressed()
  .withFields<SlotData>();

const slotParser = parseObject().json().compressed().withFields<SlotData>();

//  const save = tldParser.parse(Buffer.alloc(1));
// save?.m_Dict.global.condition;

export default tldParser;

export { slotParser };
