import type SteamPipeSaveData from './SteamPipeSaveData';

export default interface SteamPipeSaveList {
  /** @default {List<SteamPipeSaveData>} */
  m_SerializedSteamPipes?: (SteamPipeSaveData)[] | null;
}
