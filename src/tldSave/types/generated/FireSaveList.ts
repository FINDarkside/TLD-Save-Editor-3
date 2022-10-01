import type FireSaveData from './FireSaveData';

export default interface FireSaveList {
  /** @default {List<FireSaveData>} */
  m_SerializedFires?: (FireSaveData)[] | null;
  /** @default {List<string>} */
  m_DestroyedFires?: (string | null)[] | null;
}
