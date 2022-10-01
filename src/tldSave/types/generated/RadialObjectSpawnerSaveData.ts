
export default interface RadialObjectSpawnerSaveData {
  m_GameHourTimeToRespawn?: number;
  m_Position?: [number, number, number] | null;
  m_Guid?: string | null;
  m_HasSpawned?: boolean;
  m_SpawnedObjectPositions?: Array<[number, number, number] | null> | null;
  m_SpawnedObjectRotations?: Array<[number, number, number, number] | null> | null;
  m_SpawnedPrefabNames?: Array<string | null> | null;
  m_SpawnedObjectUnlockForDetailMapStates?: Array<boolean> | null;
}
