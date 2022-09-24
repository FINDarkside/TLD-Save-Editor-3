import type InventorySaveDataProxy from './types/generated/InventorySaveDataProxy';
import type GlobalSaveGameFormat from './types/generated/GlobalSaveGameFormat';
import type ConditionSaveDataProxy from './types/generated/ConditionSaveDataProxy';
import type SlotData from './types/generated/SlotData';
import parse from './index';
import HungerSaveDataProxy from './types/generated/HungerSaveDataProxy';
import ThirstSaveDataProxy from './types/generated/ThirstSaveDataProxy';
import FatigueSaveDataProxy from './types/generated/FatigueSaveDataProxy';
import FreezingSaveDataProxy from './types/generated/FreezingSaveDataProxy';
import WillpowerSaveDataProxy from './types/generated/WillpowerSaveDataProxy';

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
      hunger: parse()
        .from('m_Hunger_Serialized')
        .json()
        .withFields<HungerSaveDataProxy>(),
      thirst: parse()
        .from('m_Thirst_Serialized')
        .json()
        .withFields<ThirstSaveDataProxy>(),
      fatigue: parse()
        .from('m_Fatigue_Serialized')
        .json()
        .withFields<FatigueSaveDataProxy>(),
      freezing: parse()
        .from('m_Freezing_Serialized')
        .json()
        .withFields<FreezingSaveDataProxy>(),
      willpower: parse()
        .from('m_Willpower_Serialized')
        .json()
        .withFields<WillpowerSaveDataProxy>(),
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
