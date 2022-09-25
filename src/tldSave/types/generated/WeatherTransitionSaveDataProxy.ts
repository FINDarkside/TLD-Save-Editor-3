import type WeatherStage from './enums/WeatherStage';

export default interface WeatherTransitionSaveDataProxy {
  m_UseUnmanagedWeatherStage?: boolean;
  m_UnmanagedWeatherStage?: WeatherStage;
  m_CurrentWeatherSetName?: string | null;
  m_CurrentWeatherSetProgressFrac?: number;
  m_CurrentWeatherSetSerialized?: string | null;
  m_CurrentWeatherSetType?: number;
  m_PreviousWeatherSetType?: number;
}
