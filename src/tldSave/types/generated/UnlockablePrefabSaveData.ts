import type NPC_UnlockablePrefabInfo from './NPC_UnlockablePrefabInfo';

export default interface UnlockablePrefabSaveData {
  m_UnlockablePrefab: NPC_UnlockablePrefabInfo;
  m_Unlocked: boolean;
  m_UnlockablePrefabName: string;
}
