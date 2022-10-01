import type FlareGunRoundSaveData from './FlareGunRoundSaveData';

export default interface FlareGunRoundSaveList {
  /** @default {List<FlareGunRoundSaveData>} */
  m_SerializedItems?: (FlareGunRoundSaveData)[] | null;
}
