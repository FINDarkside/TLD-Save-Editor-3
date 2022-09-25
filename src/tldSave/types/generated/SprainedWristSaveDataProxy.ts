
export default interface SprainedWristSaveDataProxy {
  m_Active?: boolean;
  m_ElapsedHours?: number;
  m_DurationHours?: number;
  m_ElapsedRest?: number;
  m_CausesLocIDs?: Array<string | null> | null;
  m_Locations?: Array<number> | null;
  m_ElapsedHoursList?: Array<number> | null;
  m_DurationHoursList?: Array<number> | null;
  m_ElapsedRestList?: Array<number> | null;
  m_IsNoSprainWristForced?: boolean;
}
