import type RandomSpawnObjectSaveData from './RandomSpawnObjectSaveData';

export default interface RandomSpawnObjectSaveList {
  /** @default {List<RandomSpawnObjectSaveData>} */
  m_SaveDataList?: (RandomSpawnObjectSaveData)[] | null;
}
