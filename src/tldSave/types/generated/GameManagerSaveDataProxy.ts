import type GameRegion from './enums/GameRegion';

export default interface GameManagerSaveDataProxy {
  m_BlockAbilityToRest: boolean;
  m_BlockedRestLocID: string;
  m_SceneTransitionDataSerialized: string;
  m_StartRegion: GameRegion;
}
