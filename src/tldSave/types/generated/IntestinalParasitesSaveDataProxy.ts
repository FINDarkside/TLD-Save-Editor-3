
export default interface IntestinalParasitesSaveDataProxy {
  m_HasParasites: boolean;
  m_HasParasiteRisk: boolean;
  m_CurrentInfectionChance: number;
  m_ParasitesElapsedHours: number;
  m_RiskElapsedHours: number;
  m_RiskDurationHours: number;
  m_NumDosesTaken: number;
  m_HasTakenDoseToday: boolean;
  m_DayToAllowNextDose: number;
  m_NumPiecesEatenThisRiskCycle: number;
}
