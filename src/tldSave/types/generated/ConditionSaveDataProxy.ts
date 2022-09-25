import type ConditionLevel from './enums/ConditionLevel';

export default interface ConditionSaveDataProxy {
  m_CurrentHPProxy?: number;
  m_NumSecondsSinceLastVoiceOver?: number;
  m_NeverDieProxy?: boolean;
  m_Invulnerable?: boolean;
  m_HideDamageEvents?: boolean;
  m_FoceUncrouched?: boolean;
  m_CanPlayNearDeathMusic?: boolean;
  m_ConditionLevelForPreviousVoiceOver?: ConditionLevel;
  m_SuppressVoiceOver?: boolean;
}
