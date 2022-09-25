
export default interface BurnsSaveDataProxy {
  m_Active?: boolean;
  m_ElapsedHours?: number;
  m_DurationHours?: number;
  m_PainKillersTaken?: boolean;
  m_BandageApplied?: boolean;
  m_NumBurnRemindersPlayed?: number;
  m_SecondsUntilNextBurnReminder?: number;
  m_CauseLocID?: string | null;
}
