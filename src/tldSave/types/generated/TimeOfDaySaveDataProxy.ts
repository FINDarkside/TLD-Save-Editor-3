
export default interface TimeOfDaySaveDataProxy {
  m_TimeProxy?: number;
  m_HoursPlayedNotPausedProxy?: number;
  m_UniStormDayCounterProxy?: number;
  m_UniStormMoonPhaseIndexProxy?: number;
  m_UniStormDayNumberProxy?: number;
  m_DayLastDawnStingerAudioPlayed?: number;
  m_DayLastNightStingerAudioPlayed?: number;
  m_DayLastDawnVoiceOverPlayed?: number;
  m_DayLastNightVoiceOverPlayed?: number;
  m_4DONCurrentDay?: number;
  m_LockedTOD?: boolean;
  m_CurrentScene?: string | null;
  m_DayEntered?: number;
  m_HourEntered?: number;
  m_ElapsedRealSecondsInScene?: number;
  m_ElapsedGameHoursInScene?: number;
}
