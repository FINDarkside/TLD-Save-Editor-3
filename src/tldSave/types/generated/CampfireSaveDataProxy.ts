import type CampfireState from './enums/CampfireState';

export default interface CampfireSaveDataProxy {
  m_State?: CampfireState;
  /** @default {Dictionary<string, string>} */
  m_RockGuids?: Record<(string), (string | null)> | null;
}
