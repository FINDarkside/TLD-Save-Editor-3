
export default interface MapSaveData {
  m_MapSaveDataDict: Record<string, string>;
  m_DetailSurveyPositions: Record<string, string>;
  m_DetailSurveyLastUpdateTimes: Record<string, number>;
  m_SurveyedVistaLocations: Record<string, string>;
  m_DelayedMapElementRemovals: string[];
  m_UnlockedRegionNames: string[];
  m_HasBeenUpdated: boolean;
  m_Guid: string;
}
