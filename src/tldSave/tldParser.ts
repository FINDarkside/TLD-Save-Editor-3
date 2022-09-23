import type InventorySaveDataProxy from './types/generated/InventorySaveDataProxy';
import type GlobalSaveGameFormat from './types/generated/GlobalSaveGameFormat';
import type ConditionSaveDataProxy from './types/generated/ConditionSaveDataProxy';
import type SlotData from './types/generated/SlotData';
import parse from './index';

const tldParser = parse({
  m_Dict: parse({
    global: parse({
      inventory: parse()
        .from('m_Inventory_Serialized')
        .json()
        .withFields<InventorySaveDataProxy>(),
      condition: parse()
        .from('m_Condition_Serialized')
        .json()
        .withFields<ConditionSaveDataProxy>(),
    })
      .json()
      .compressed()
      .withFields<GlobalSaveGameFormat>(),
  }),
})
  .json()
  .compressed()
  .withFields<SlotData>();

export default tldParser;
