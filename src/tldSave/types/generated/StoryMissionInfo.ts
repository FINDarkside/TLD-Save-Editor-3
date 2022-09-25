
export default interface StoryMissionInfo {
  missionID?: string | null;
  nameLocID?: string | null;
  descriptionLocID?: string | null;
  textureName?: string | null;
  isActive?: boolean;
  completedSuccessfully?: boolean;
  timerID?: string | null;
  isSideMission?: boolean;
  m_NPC_ID?: string | null;
  m_TrustDecayGracePeriodHours?: number;
  chapterLocID?: string | null;
  showWhenCompleted?: boolean;
  icon?: string | null;
}
