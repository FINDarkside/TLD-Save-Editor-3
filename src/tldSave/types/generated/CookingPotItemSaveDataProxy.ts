
export default interface CookingPotItemSaveDataProxy {
  m_FireBeingUsedGUID?: string | null;
  m_GearItemBeingCookedGUID?: string | null;
  m_CookingElapsedHours?: number;
  m_GracePeriodElapsedHours?: number;
  m_FireBurningTimeTODHours?: number;
  m_HoursPlayedWhenSerialized?: number;
  m_LitersSnowBeingMelted?: number;
  m_LitersWaterBeingBoiled?: number;
  m_CanOnlyWarmUpFood?: boolean;
}
