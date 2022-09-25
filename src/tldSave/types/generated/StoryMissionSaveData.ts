import type StoryMissionInfo from './StoryMissionInfo';
import type StoryMissionObjective from './StoryMissionObjective';

export default interface StoryMissionSaveData {
  m_MissionInfo?: (StoryMissionInfo)[] | null;
  m_ObjectiveInfo?: (StoryMissionObjective)[] | null;
  m_HasBeenUpdated?: boolean;
}
