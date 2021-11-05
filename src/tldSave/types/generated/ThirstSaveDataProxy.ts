import type ThirstLevel from './enums/ThirstLevel';

export default interface ThirstSaveDataProxy {
  m_CurrentThirstProxy: number;
  m_NumSecondsSinceLastVoiceOver: number;
  m_DehydratedInLog: boolean;
  m_ThirstLevelForPreviousVoiceOver: ThirstLevel;
  m_SuppressVoiceOver: boolean;
}
