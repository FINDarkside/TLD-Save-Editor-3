import type RockCacheInfo from './RockCacheInfo';
import type RockCacheDestroyedInfo from './RockCacheDestroyedInfo';

export default interface RockCacheInfoSaveList {
  /** @default {List<RockCacheInfo>} */
  m_SerializedRockCacheInfoList: RockCacheInfo[];
  /** @default {List<RockCacheDestroyedInfo>} */
  m_SerializedDestroyedRockCacheInScene: RockCacheDestroyedInfo[];
  m_RockCacheIndex: number;
}
