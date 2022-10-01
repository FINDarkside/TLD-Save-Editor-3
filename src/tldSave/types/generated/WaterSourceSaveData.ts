
export default interface WaterSourceSaveData {
  m_Position?: [number, number, number] | null;
  m_Rotation?: [number, number, number, number] | null;
  m_PrefabName?: string | null;
  m_SearializedWaterSource?: string | null;
  m_Guid?: string | null;
  m_NotActive?: boolean;
}
