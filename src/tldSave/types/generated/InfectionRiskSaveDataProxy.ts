
export default interface InfectionRiskSaveDataProxy {
  m_Active?: boolean;
  m_ElapsedHours?: number;
  m_DurationHours?: number;
  m_AntisepticTaken?: boolean;
  m_CommentTime?: number;
  m_CurrentInfectionChance?: number;
  m_CausesLocIDs?: Array<string | null> | null;
  m_Locations?: Array<number> | null;
  m_ElapsedHoursList?: Array<number> | null;
  m_DurationHoursList?: Array<number> | null;
  m_AntisepticTakenList?: Array<boolean> | null;
  m_CurrentInfectionChanceList?: Array<number> | null;
  m_ConstantAfflictionIndices?: Array<number> | null;
}
