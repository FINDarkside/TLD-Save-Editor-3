import type UnlockablePrefabSaveData from './UnlockablePrefabSaveData';

export default interface UnlockableTrackerSaveData {
  m_UnlockablePrefabsActive: Array<UnlockablePrefabSaveData>;
  m_NPCTrustID: string;
}
