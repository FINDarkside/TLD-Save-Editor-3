import type NeedPrefabSaveData from './NeedPrefabSaveData';

export default interface NeedTrackerSaveData {
  m_NeedPrefabsActive?: Array<NeedPrefabSaveData> | null;
  m_NPCTrustID?: string | null;
  m_HasBeenInteractedWith?: boolean;
  m_NoTrustDecayUntilPlayerInteraction?: boolean;
}
