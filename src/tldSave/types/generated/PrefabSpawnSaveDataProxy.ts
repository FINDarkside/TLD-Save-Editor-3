
export default interface PrefabSpawnSaveDataProxy {
  m_Prefab?: unknown;
  m_Offset?: [number, number, number] | null;
  m_Rotation?: [number, number, number] | null;
  m_Scale?: [number, number, number] | null;
  m_SpawnWeight?: number;
  m_LodMask?: number;
  m_SetId?: number;
}
