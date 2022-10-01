import type BaseAiData from './BaseAiData';

export default interface BaseAiSaveList {
  /** @default {List<BaseAiData>} */
  m_SerializedBaseAI?: (BaseAiData)[] | null;
}
