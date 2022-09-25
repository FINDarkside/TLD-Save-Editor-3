import type NPC_NeedPrefabInfo from './NPC_NeedPrefabInfo';

export default interface NeedPrefabSaveData {
  m_NeedPrefab?: NPC_NeedPrefabInfo;
  m_HasBeenCompleted?: boolean;
  m_CompletedTimeHoursPlayed?: number;
  m_NeedPrefabName?: string | null;
}
