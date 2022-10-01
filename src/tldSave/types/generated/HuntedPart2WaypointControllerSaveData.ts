import type HuntedPart2WaypointControllerState from './enums/HuntedPart2WaypointControllerState';

export default interface HuntedPart2WaypointControllerSaveData {
  m_CurrentWaypoint?: number;
  m_CurrentWeatherStage?: number;
  m_State?: HuntedPart2WaypointControllerState;
}
