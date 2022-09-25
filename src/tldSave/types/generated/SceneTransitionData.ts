
export default interface SceneTransitionData {
  m_TeleportPlayerSaveGamePosition?: boolean;
  m_SpawnPointName?: string | null;
  m_SpawnPointAudio?: string | null;
  m_ForceSceneOnNextNavMapLoad?: string | null;
  m_ForceNextSceneLoadTriggerScene?: string | null;
  m_PosBeforeInteriorLoad?: [number, number, number] | null;
  m_SceneSaveFilenameCurrent?: string | null;
  m_SceneSaveFilenameNextLoad?: string | null;
  m_SceneLocationLocIDToShow?: string | null;
  m_GameRandomSeed?: number;
  m_Location?: string | null;
  m_LastOutdoorScene?: string | null;
}
