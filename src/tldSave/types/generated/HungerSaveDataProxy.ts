import type HungerLevel from './enums/HungerLevel';

export default interface HungerSaveDataProxy {
  m_CurrentReserveCaloriesProxy?: number;
  m_NumSecondsSinceLastVoiceOver?: number;
  m_StarvingInLog?: boolean;
  m_NumHoursStarving?: number;
  m_FatiguePenalty?: number;
  m_HungerLevelForPreviousVoiceOver?: HungerLevel;
  m_CaloriesEatenToday?: number;
  m_CaloriesExpendedToday?: number;
  m_SuppressVoiceOver?: boolean;
}
