import type SteamPipeSaveData from './SteamPipeSaveData';

export default interface SteamPipeValveSaveList {
  /** @default {List<SteamPipeSaveData>} */
  m_SerializedSteamPipeValves?: (SteamPipeSaveData)[] | null;
  /** @default {List<SteamPipeSaveData>} */
  m_SerializedSteamPipeValveSockets?: (SteamPipeSaveData)[] | null;
}
