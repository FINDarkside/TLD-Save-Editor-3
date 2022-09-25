import type RockCacheInfo from './RockCacheInfo';
import type RockCacheDestroyedInfo from './RockCacheDestroyedInfo';

export default interface RockCacheInfoSaveList {
  /** @default {List<RockCacheInfo>} */
  m_SerializedRockCacheInfoList?: (RockCacheInfo)[] | null;
  /** @default {List<RockCacheDestroyedInfo>} */
  m_SerializedDestroyedRockCacheInScene?: (RockCacheDestroyedInfo)[] | null;
  m_RockCacheIndex?: number;
}
