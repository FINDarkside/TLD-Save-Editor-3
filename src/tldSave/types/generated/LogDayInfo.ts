import type AfflictionType from './enums/AfflictionType';

export default interface LogDayInfo {
  m_DayNumber?: number;
  m_Notes?: string | null;
  m_WorldExplored?: number;
  m_HoursRested?: number;
  m_ConditionLow?: number;
  m_ConditionHigh?: number;
  m_CaloriesBurned?: number;
  m_Afflictions?: (AfflictionType)[] | null;
  m_LocationLocIDs?: (string | null)[] | null;
  m_RegionLocIDs?: (string | null)[] | null;
  m_RegionSceneNames?: (string | null)[] | null;
}
