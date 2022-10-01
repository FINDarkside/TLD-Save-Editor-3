
export default interface IceFishingHoleSaveData {
  m_Position?: [number, number, number] | null;
  m_HoursPlayed?: number;
  m_MinutesSinceLastClearing?: number;
  m_NormalizedFrozen?: number;
  m_Guid?: string | null;
}
