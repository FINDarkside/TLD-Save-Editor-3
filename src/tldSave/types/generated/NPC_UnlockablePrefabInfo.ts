import type LocalizedString from './LocalizedString';

export default interface NPC_UnlockablePrefabInfo {
  m_LocalizedDisplayName?: LocalizedString;
  m_LocalizedRequirementsDescription?: LocalizedString;
  m_LocalizedDescription?: LocalizedString;
  m_TrustToUnlock?: number;
  m_Unlocked?: boolean;
}
