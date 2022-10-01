import type SwitchToggleState from './enums/SwitchToggleState';

export default interface SwitchBoxSaveDataProxy {
  m_Guid?: string | null;
  m_SwitchToggleState?: SwitchToggleState;
  m_IsLocked?: boolean;
}
