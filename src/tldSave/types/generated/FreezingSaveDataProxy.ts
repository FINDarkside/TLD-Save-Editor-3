import type FreezingLevel from './enums/FreezingLevel';

export default interface FreezingSaveDataProxy {
  m_CurrentFreezingProxy: number;
  m_NumSecondsSinceLastVoiceOver: number;
  m_FreezingInLog: boolean;
  m_FreezingLevelForPreviousVoiceOver: FreezingLevel;
  m_TemperatureBonusFromRunning: number;
  m_SuppressVoiceOver: boolean;
}
