import type LinkedChimneySaveData from './LinkedChimneySaveData';

export default interface ChimneySaveList {
  /** @default {List<LinkedChimneySaveData>} */
  m_SerializedChimneyData: LinkedChimneySaveData[];
}
