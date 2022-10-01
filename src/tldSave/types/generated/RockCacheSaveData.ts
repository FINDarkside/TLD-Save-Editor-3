
export default interface RockCacheSaveData {
  m_Position?: [number, number, number] | null;
  m_Rotation?: [number, number, number, number] | null;
  m_Guid?: string | null;
  m_SearializedRockCache?: string | null;
}
