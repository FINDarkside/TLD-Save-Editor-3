
export default interface CabinFeverSaveDataProxy {
  m_Active?: boolean;
  m_RiskActive?: boolean;
  m_ElapsedHours?: number;
  m_IndoorTimeTracked?: Array<number> | null;
  m_HourLastFrame?: number;
  m_DoneHalloweenEventFix?: boolean;
}
