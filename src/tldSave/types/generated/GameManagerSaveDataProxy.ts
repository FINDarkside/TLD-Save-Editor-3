import type GameRegion from './enums/GameRegion';

export default interface GameManagerSaveDataProxy {
  m_BlockAbilityToRest?: boolean;
  m_BlockedRestLocID?: string | null;
  m_SceneTransitionDataSerialized?: string | null;
  m_StartRegion?: GameRegion;
}
