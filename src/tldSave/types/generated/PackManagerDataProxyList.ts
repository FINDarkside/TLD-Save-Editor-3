import type PackManagerDataProxy from './PackManagerDataProxy';

export default interface PackManagerDataProxyList {
  /** @default {List<PackManagerDataProxy>} */
  m_SerializedDataProxyList?: (PackManagerDataProxy)[] | null;
  /** @default {List<string>} */
  m_RemoveOnLoadGuids?: (string | null)[] | null;
  m_SerializedTime?: number;
  m_PlayerInPackCombatTrigger?: boolean;
}
