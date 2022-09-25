import type UnlockablePrefabSaveData from './UnlockablePrefabSaveData';

export default interface UnlockableTrackerSaveData {
  m_UnlockablePrefabsActive?: Array<UnlockablePrefabSaveData> | null;
  m_NPCTrustID?: string | null;
}
