
export default interface BloodLossSaveDataProxy {
  m_Active?: boolean;
  m_ElapsedHours?: number;
  m_DurationHours?: number;
  m_CausesLocIDs?: Array<string | null> | null;
  m_Locations?: Array<number> | null;
  m_ElapsedHoursList?: Array<number> | null;
  m_DurationHoursList?: Array<number> | null;
}
