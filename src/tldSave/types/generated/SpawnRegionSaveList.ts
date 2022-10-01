import type SpawnRegionSaveData from './SpawnRegionSaveData';

export default interface SpawnRegionSaveList {
  /** @default {List<SpawnRegionSaveData>} */
  m_SerializedSpawnRegions?: (SpawnRegionSaveData)[] | null;
  m_NoPredatorSpawningInVoyageurHours?: number;
}
