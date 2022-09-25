
export default interface TrustManagerSaveData {
  m_TrustDictionary?: Record<(string), (number)> | null;
  m_StrikesDictionary?: Record<(string), (number)> | null;
  m_StrikeTimersDictionary?: Record<(string), (number)> | null;
  m_NeedTrackersSerialized?: Record<(string), (string | null)> | null;
  m_UnlockableTrackersSerialized?: Record<(string), (string | null)> | null;
  m_TrustDecayDictionary?: Record<(string), (number)> | null;
  m_GracePeriodTimersDictionary?: Record<(string), (number)> | null;
  m_GracePeriodValuesDictionary?: Record<(string), (number)> | null;
}
