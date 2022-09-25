import type FatigueLevel from './enums/FatigueLevel';

export default interface FatigueSaveDataProxy {
  m_CurrentFatigueProxy?: number;
  m_NumSecondsSinceLastVoiceOver?: number;
  m_ExhaustedInLog?: boolean;
  m_FatigueLevelForPreviousVoiceOver?: FatigueLevel;
  m_SuppressVoiceOver?: boolean;
}
