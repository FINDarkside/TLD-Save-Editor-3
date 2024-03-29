import type InventoryItemSaveData from './InventoryItemSaveData';

export default interface InventorySaveDataProxy {
  /** @default {List<InventoryItemSaveData>} */
  m_SerializedItems?: (InventoryItemSaveData)[] | null;
  /** @default {int[4]} */
  m_QuickSelectInstanceIDs?: Array<number> | null;
  m_ForceOverrideWeight?: boolean;
  m_OverridedWeight?: number;
  m_ConsumedCoffee?: boolean;
  m_ConsumedRosehipTea?: boolean;
  m_ConsumedReishiTea?: boolean;
  m_ConsumedOldMansBeardDressing?: boolean;
  m_SuppressScentIndicator?: boolean;
}
