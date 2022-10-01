import type SnowShelterSaveData from './SnowShelterSaveData';

export default interface SnowShelterSaveList {
  /** @default {List<SnowShelterSaveData>} */
  m_SerializedSnowShelters?: (SnowShelterSaveData)[] | null;
}
