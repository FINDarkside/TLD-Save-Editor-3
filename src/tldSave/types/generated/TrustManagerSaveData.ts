
export default interface TrustManagerSaveData {
  m_TrustDictionary: Record<string, number>;
  m_StrikesDictionary: Record<string, number>;
  m_StrikeTimersDictionary: Record<string, number>;
  m_NeedTrackersSerialized: Record<string, string>;
  m_UnlockableTrackersSerialized: Record<string, string>;
  m_TrustDecayDictionary: Record<string, number>;
  m_GracePeriodTimersDictionary: Record<string, number>;
  m_GracePeriodValuesDictionary: Record<string, number>;
}
