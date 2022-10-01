
export default interface BodyHarvestSaveData {
  m_Position?: [number, number, number] | null;
  m_Rotation?: [number, number, number, number] | null;
  m_PrefabName?: string | null;
  m_SerializedBodyHarvest?: string | null;
  m_Guid?: string | null;
  m_MissionId?: string | null;
}
