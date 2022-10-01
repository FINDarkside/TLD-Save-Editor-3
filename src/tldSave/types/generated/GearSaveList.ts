import type GearSaveData from './GearSaveData';

export default interface GearSaveList {
  /** @default {List<GearSaveData>} */
  m_SerializedItems?: (GearSaveData)[] | null;
  /** @default {List<string>} */
  m_SpawnedGearInOldSavesGUIDs?: (string | null)[] | null;
}
