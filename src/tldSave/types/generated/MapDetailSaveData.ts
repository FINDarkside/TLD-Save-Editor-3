import type MapDetailStateData from './MapDetailStateData';

export default interface MapDetailSaveData {
  /** @default {Dictionary<string, bool>} */
  m_MapDetailUnlockedStates?: Record<(string), (boolean)> | null;
  /** @default {Dictionary<string, MapDetailStateData>} */
  m_NewMapDetailStates?: Record<(string), (MapDetailStateData)> | null;
}
