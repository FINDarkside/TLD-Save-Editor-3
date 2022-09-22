import type AfflictionType from './enums/AfflictionType';

export default interface LogDayInfo {
  m_DayNumber: number;
  m_Notes: string;
  m_WorldExplored: number;
  m_HoursRested: number;
  m_ConditionLow: number;
  m_ConditionHigh: number;
  m_CaloriesBurned: number;
  m_Afflictions: AfflictionType[];
  m_LocationLocIDs: string[];
  m_RegionLocIDs: string[];
  m_RegionSceneNames: string[];
}
