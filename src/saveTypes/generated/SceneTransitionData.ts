
export default interface SceneTransitionData {
  m_TeleportPlayerSaveGamePosition: boolean;
  m_SpawnPointName: string;
  m_SpawnPointAudio: string;
  m_ForceSceneOnNextNavMapLoad: string;
  m_ForceNextSceneLoadTriggerScene: string;
  m_PosBeforeInteriorLoad: [number, number, number];
  m_SceneSaveFilenameCurrent: string;
  m_SceneSaveFilenameNextLoad: string;
  m_SceneLocationLocIDToShow: string;
  m_GameRandomSeed: number;
  m_Location: string;
  m_LastOutdoorScene: string;
}
