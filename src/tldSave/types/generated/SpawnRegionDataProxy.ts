import type SpawnDataProxy from './SpawnDataProxy';
import type WildlifeMode from './enums/WildlifeMode';

export default interface SpawnRegionDataProxy {
  m_HoursPlayed?: number;
  m_ElapsedHoursAtLastActiveReRoll?: number;
  m_IsActive?: boolean;
  /** @default {List<SpawnDataProxy>} */
  m_ActiveSpawns?: (SpawnDataProxy)[] | null;
  m_NumRespawnsPending?: number;
  m_ElapasedHoursNextRespawnAllowed?: number;
  m_NumTrapped?: number;
  m_HoursNextTrapReset?: number;
  m_SpawnGuidCounter?: number;
  m_CurrentWaypointPathIndex?: number;
  m_WildlifeMode?: WildlifeMode;
  m_HasBeenDisabledByAurora?: boolean;
  m_WasActiveBeforeAurora?: boolean;
}
