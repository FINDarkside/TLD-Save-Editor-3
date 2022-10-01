
export default interface BaseAiData {
  m_Position?: [number, number, number] | null;
  m_Rotation?: [number, number, number, number] | null;
  m_PrefabName?: string | null;
  m_BaseAiSerialized?: string | null;
  m_Guid?: string | null;
}
