
export default interface StoryMissionInfo {
  missionID: string;
  nameLocID: string;
  descriptionLocID: string;
  textureName: string;
  isActive: boolean;
  completedSuccessfully: boolean;
  timerID: string;
  isSideMission: boolean;
  m_NPC_ID: string;
  m_TrustDecayGracePeriodHours: number;
  chapterLocID: string;
  showWhenCompleted: boolean;
  icon: string;
}
