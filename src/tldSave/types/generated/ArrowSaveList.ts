import type ArrowSaveData from './ArrowSaveData';

export default interface ArrowSaveList {
  /** @default {List<ArrowSaveData>} */
  m_SerializedItems?: (ArrowSaveData)[] | null;
}
