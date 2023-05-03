import type ExperienceModeType from './enums/ExperienceModeType';
import type VoicePersona from './enums/VoicePersona';
import type GameRegion from './enums/GameRegion';

export default interface InfoSaveGameFormat {
  m_XPMode?: ExperienceModeType;
  m_Region?: GameRegion | null;
  m_LocationOverride?: string | null;
  m_Persona?: VoicePersona;
  m_Condition?: number;
  m_HoursSurvived?: number;
  m_WorldExplored?: number;
  m_EpisodeProgress?: number;
  m_EpisodeCompleted?: boolean;
  m_ActiveMissionLocId?: string | null;
  m_ActiveMissionId?: string | null;
}
