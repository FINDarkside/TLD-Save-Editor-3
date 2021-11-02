
export default interface SprainedAnkleSaveDataProxy {
  m_Active: boolean;
  m_ElapsedHours: number;
  m_DurationHours: number;
  m_ElapsedRest: number;
  m_SecondsSinceLastPainAudio: number;
  m_SecondsUntilNextPainAudio: number;
  m_CausesLocIDs: Array<string>;
  m_Locations: Array<number>;
  m_ElapsedHoursList: Array<number>;
  m_DurationHoursList: Array<number>;
  m_ElapsedRestList: Array<number>;
}
