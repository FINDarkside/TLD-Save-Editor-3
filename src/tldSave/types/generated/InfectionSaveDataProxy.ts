
export default interface InfectionSaveDataProxy {
  m_Active?: boolean;
  m_ElapsedHours?: number;
  m_DurationHours?: number;
  m_AntibioticsTaken?: boolean;
  m_ElapsedRest?: number;
  m_CausesLocIDs?: Array<string | null> | null;
  m_Locations?: Array<number> | null;
  m_ElapsedHoursList?: Array<number> | null;
  m_DurationHoursList?: Array<number> | null;
  m_AntibioticsTakenList?: Array<boolean> | null;
  m_ElapsedRestList?: Array<number> | null;
}
