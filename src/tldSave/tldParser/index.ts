import { parseObject } from '../parser';
import type SlotData from '../types/generated/SlotData';
import globalParser from './global';

const tldParser = parseObject({
  m_Dict: parseObject({
    global: globalParser,
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
