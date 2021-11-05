import type EncumberLevel from './enums/EncumberLevel';

export default interface EncumberSaveDataProxy {
  m_EncumberedInLog: boolean;
  m_NumSecondsSinceLastVoiceOver: number;
  m_EcumberLevelForPreviousVoiceOver: EncumberLevel;
}
