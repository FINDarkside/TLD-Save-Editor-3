
export default interface PlaceableSaveData {
  m_ActiveSelf?: boolean;
  m_Name?: string | null;
  m_PrefabName?: string | null;
  m_Position?: [number, number, number] | null;
  m_Rotation?: [number, number, number, number] | null;
  m_CarryableBodySerialized?: string | null;
  m_InteractionOverrideSerialized?: string | null;
}
