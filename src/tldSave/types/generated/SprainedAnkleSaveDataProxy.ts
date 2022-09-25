
export default interface SprainedAnkleSaveDataProxy {
  m_Active?: boolean;
  m_ElapsedHours?: number;
  m_DurationHours?: number;
  m_ElapsedRest?: number;
  m_SecondsSinceLastPainAudio?: number;
  m_SecondsUntilNextPainAudio?: number;
  m_CausesLocIDs?: Array<string | null> | null;
  m_Locations?: Array<number> | null;
  m_ElapsedHoursList?: Array<number> | null;
  m_DurationHoursList?: Array<number> | null;
  m_ElapsedRestList?: Array<number> | null;
}
