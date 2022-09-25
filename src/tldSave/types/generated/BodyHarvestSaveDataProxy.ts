
export default interface BodyHarvestSaveDataProxy {
  m_MeatAvailableKG?: number;
  m_HideAvailableUnits?: number;
  m_GutAvailableUnits?: number;
  m_Frozen?: boolean;
  m_Ravaged?: boolean;
  m_Condition?: number;
  m_RolledSpawnChance?: boolean;
  m_AllowDecay?: boolean;
  m_HoursPlayed?: number;
  m_PercentFrozen?: number;
  m_HoursRemainingOnCloseFire?: number;
  m_DecimationKGPerHour?: number;
  m_DecimationHoursRemaining?: number;
  m_QuarterDurationMinutes?: number;
  m_HasHarvested?: boolean;
  m_LastHarvestTimeHours?: number;
  m_QuarterBagWasteMultiplier?: number;
  m_MissionIdSerialized?: string | null;
  m_BearHuntAiReduxSerialized?: string | null;
}
