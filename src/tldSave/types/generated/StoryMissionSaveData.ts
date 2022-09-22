import type StoryMissionInfo from './StoryMissionInfo';
import type StoryMissionObjective from './StoryMissionObjective';

export default interface StoryMissionSaveData {
  m_MissionInfo: StoryMissionInfo[];
  m_ObjectiveInfo: StoryMissionObjective[];
  m_HasBeenUpdated: boolean;
}
