import type NeedPrefabSaveData from './NeedPrefabSaveData';

export default interface NeedTrackerSaveData {
  m_NeedPrefabsActive: Array<NeedPrefabSaveData>;
  m_NPCTrustID: string;
  m_HasBeenInteractedWith: boolean;
  m_NoTrustDecayUntilPlayerInteraction: boolean;
}
