
export default interface MapSaveData {
  m_MapSaveDataDict?: Record<(string), (string | null)> | null;
  m_DetailSurveyPositions?: Record<(string), (string | null)> | null;
  m_DetailSurveyLastUpdateTimes?: Record<(string), (number)> | null;
  m_SurveyedVistaLocations?: Record<(string), (string | null)> | null;
  m_DelayedMapElementRemovals?: (string | null)[] | null;
  m_UnlockedRegionNames?: (string | null)[] | null;
  m_HasBeenUpdated?: boolean;
  m_Guid?: string | null;
}
