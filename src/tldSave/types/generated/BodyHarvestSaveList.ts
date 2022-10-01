import type BodyHarvestSaveData from './BodyHarvestSaveData';

export default interface BodyHarvestSaveList {
  /** @default {List<BodyHarvestSaveData>} */
  m_SerializedBodyHarvests?: (BodyHarvestSaveData)[] | null;
}
