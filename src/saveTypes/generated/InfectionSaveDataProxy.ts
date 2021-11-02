
export default interface InfectionSaveDataProxy {
  m_Active: boolean;
  m_ElapsedHours: number;
  m_DurationHours: number;
  m_AntibioticsTaken: boolean;
  m_ElapsedRest: number;
  m_CausesLocIDs: Array<string>;
  m_Locations: Array<number>;
  m_ElapsedHoursList: Array<number>;
  m_DurationHoursList: Array<number>;
  m_AntibioticsTakenList: Array<boolean>;
  m_ElapsedRestList: Array<number>;
}
