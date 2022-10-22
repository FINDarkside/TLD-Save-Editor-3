
export default interface SpawnWildlife_TriggerSaveData {
  m_PlayerHasEnteredTrigger?: boolean;
  m_Guid?: string | null;
  m_IsSpawnActive?: boolean;
  m_IsSpawnAuroraActive?: boolean;
  /** @default {List<string>} */
  m_RemovedBaseAiGuids?: (string | null)[] | null;
}
