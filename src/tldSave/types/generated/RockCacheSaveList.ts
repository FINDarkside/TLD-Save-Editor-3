import type RockCacheSaveData from './RockCacheSaveData';

export default interface RockCacheSaveList {
  /** @default {List<RockCacheSaveData>} */
  m_SerializedRockCacheList?: (RockCacheSaveData)[] | null;
}
