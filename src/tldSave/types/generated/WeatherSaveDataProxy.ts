import type WeatherStage from './enums/WeatherStage';
import type TODBlendState from './enums/TODBlendState';

export default interface WeatherSaveDataProxy {
  m_PrevBodyTempProxy: number;
  m_TempHighProxy: number;
  m_TempLowProxy: number;
  m_WeatherStageProxy: WeatherStage;
  m_UniStormElapsedHoursProxy: number;
  m_UniStormNextWeatherChangeElapsedHoursProxy: number;
  m_UseMinAirTemperature: boolean;
  m_MinAirTemperature: number;
  m_LastTimeOfDay: TODBlendState;
  m_BaseTemperatureAccumulatorForTimeOfDay: number;
  m_WindchillAccumulatorForTimeOfDay: number;
  m_TemperatureCountForTimeOfDay: number;
}
