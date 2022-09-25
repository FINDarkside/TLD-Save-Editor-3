import type MissionObjectiveCountType from './enums/MissionObjectiveCountType';

export default interface StoryMissionObjective {
  objectiveID?: string | null;
  descriptionLocID?: string | null;
  descriptionLocUnitsID?: string | null;
  hudDescriptionLocID?: string | null;
  completed?: boolean;
  timerID?: string | null;
  countCurrentBBName?: string | null;
  countRequiredBBName?: string | null;
  countType?: MissionObjectiveCountType;
  isChildObjective?: boolean;
  childObjectiveIDList?: (string | null)[] | null;
  missionID?: string | null;
  invisibleInJournal?: boolean;
  showWhenCompleted?: boolean;
  showInSummary?: boolean;
  showSmallKicker?: boolean;
  ignoreInProgressionCalculation?: boolean;
  useAsFraction?: boolean;
}
