import type MissionObjectiveCountType from './enums/MissionObjectiveCountType';

export default interface StoryMissionObjective {
  objectiveID: string;
  descriptionLocID: string;
  descriptionLocUnitsID: string;
  hudDescriptionLocID: string;
  completed: boolean;
  timerID: string;
  countCurrentBBName: string;
  countRequiredBBName: string;
  countType: MissionObjectiveCountType;
  isChildObjective: boolean;
  childObjectiveIDList: string[];
  missionID: string;
  invisibleInJournal: boolean;
  showWhenCompleted: boolean;
  showInSummary: boolean;
  showSmallKicker: boolean;
  ignoreInProgressionCalculation: boolean;
  useAsFraction: boolean;
}
