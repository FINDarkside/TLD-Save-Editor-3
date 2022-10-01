import type LeanToSaveData from './LeanToSaveData';

export default interface LeanToSaveList {
  /** @default {List<LeanToSaveData>} */
  m_SerializedLeanToList?: (LeanToSaveData)[] | null;
}
