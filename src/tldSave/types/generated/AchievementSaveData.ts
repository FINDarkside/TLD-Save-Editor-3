
export default interface AchievementSaveData {
  m_Version: number;
  m_NumDaysSurvived: number;
  m_ConsecutiveNightsSurvived: number;
  m_FullyHarvestedDeer: number;
  m_StartedNightOutside: boolean;
  m_WentInsideThisNight: boolean;
  m_HasFiredGun: boolean;
  m_HasKilledSomething: boolean;
  m_LakeRegionAllInteriors: boolean;
  m_CoastalRegionAllInteriors: boolean;
  m_NumDaysLivingOffLand: number;
  m_UsedRosehipTea: boolean;
  m_UsedReishiTea: boolean;
  m_UsedOldMansBeardDressing: boolean;
  m_NumRosehipPlantsHarvested: number;
  m_NumReishiPlantsHarvested: number;
  m_NumOldMansPlantsHarvested: number;
  m_NumCatTailPlantsHarvested: number;
  m_NumDaysCalorieStoreAboveZero: number;
  m_NumArcheryBooksRead: number;
  m_NumCarcassHarvestingBooksRead: number;
  m_NumCookingBooksRead: number;
  m_NumFireStartingBooksRead: number;
  m_NumIceFishingBooksRead: number;
  m_NumMendingBooksRead: number;
  m_NumRifleFirearmAdvancedBooksRead: number;
  m_NumRifleFirearmBooksRead: number;
  m_NumRevolverBooksRead: number;
  m_NumGunsmithingBooksRead: number;
  m_NumImprovisedKnivesCrafted: number;
  m_NumImprovisedHatchetsCrafted: number;
  m_LongestBurningCampFire: number;
  m_FoundAllCachesEpisodeOne: boolean;
  m_FoundAllCachesEpisodeTwo: boolean;
  m_NumTimberwolfPacksDefeated: number;
  m_MappedRegions: Record<string, boolean>;
}
