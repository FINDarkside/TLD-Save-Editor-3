import type TLDBehaviourTreeOwnerProxy from './TLDBehaviourTreeOwnerProxy';

export default interface TLDBehaviourTreeManagerProxy {
  /** @default {List<TLDBehaviourTreeOwnerProxy>} */
  m_TLDBehaviourTreeOwnerProxyList?: (TLDBehaviourTreeOwnerProxy)[] | null;
}
