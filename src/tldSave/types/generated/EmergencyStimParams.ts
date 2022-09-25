
export default interface EmergencyStimParams {
  m_HoursStimulatedWhenInjected?: number;
  m_MinHoursBetweenUsage?: number;
  m_StimPulseFrequencyStart?: number;
  m_StimPulseFrequencyEnd?: number;
  /** @default {float.NegativeInfinity} */
  m_LastUsageTimeInGameHours?: number;
  m_FatigueIncreaseWhenComplete?: number;
  m_StaminaDecreaseWhenComplete?: number;
  /** @default {1f} */
  m_PlayCatchBreathSecondsAfterBegin?: number;
  m_AudioIDEmergencyStim?: number;
}
