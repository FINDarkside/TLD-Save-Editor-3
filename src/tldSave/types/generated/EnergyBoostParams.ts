
export default interface EnergyBoostParams {
  m_BoostDurationHours?: number;
  m_BoostPulseFrequencyStart?: number;
  m_BoostPulseFrequencyEnd?: number;
  /** @default {float.NegativeInfinity} */
  m_LastUsageTimeInGameHours?: number;
  m_FatigueIncreaseWhenComplete?: number;
  m_StaminaDecreaseWhenComplete?: number;
  m_HeadacheDurationHours?: number;
  m_HeadachePulseFrequencyStart?: number;
  m_HeadachePulseFrequencyEnd?: number;
}
