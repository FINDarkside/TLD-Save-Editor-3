
export default interface AuroraManagerSaveDataProxy {
  m_NormalizedActive: number;
  m_ForceDisable: boolean;
  m_HoursPlayed: number;
  m_ForceAuroraNextOpportunity: boolean;
  m_ForceAuroraEarlyWindowAllowed: boolean;
  m_ForceAuroraLateWindowAllowed: boolean;
  m_ForceAuroraDurationOverride: number;
  m_IsDoingForceAurora: boolean;
  m_HasForcedAuroraStarted: boolean;
  m_IsFullyActive: boolean;
  m_ElectrolyzerFadeOutStartTime: number;
  m_ElectrolyzerFadeInStartTime: number;
  m_NumAurorasForSave: number;
}
