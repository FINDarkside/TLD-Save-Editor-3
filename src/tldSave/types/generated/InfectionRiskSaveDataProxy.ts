
export default interface InfectionRiskSaveDataProxy {
  m_Active: boolean;
  m_ElapsedHours: number;
  m_DurationHours: number;
  m_AntisepticTaken: boolean;
  m_CommentTime: number;
  m_CurrentInfectionChance: number;
  m_CausesLocIDs: Array<string>;
  m_Locations: Array<number>;
  m_ElapsedHoursList: Array<number>;
  m_DurationHoursList: Array<number>;
  m_AntisepticTakenList: Array<boolean>;
  m_CurrentInfectionChanceList: Array<number>;
  m_ConstantAfflictionIndices: Array<number>;
}
