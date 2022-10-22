
export default interface BreakableIceComponentSaveDataProxy {
  m_Position?: [number, number, number] | null;
  /** @default {List<string>} */
  m_BrokenIceData?: (string | null)[] | null;
}
