import type WindDirection from './enums/WindDirection';
import type WindStrength from './enums/WindStrength';

export default interface WindSaveDataProxy {
  m_Version?: number;
  m_windDirectionProxy?: WindDirection;
  m_windStrengthProxy?: WindStrength;
  m_windMPHProxy?: number;
  m_FirstPhaseSetProxy?: boolean;
  m_PhaseElapsedTODSecondsProxy?: number;
  m_PhaseDurationHoursProxy?: number;
  m_TransitionTimeTODSecondsProxy?: number;
  m_ActiveSettingsSerialized?: string | null;
  m_SourceSettingsSerialized?: string | null;
  m_TargetSettingsSerialized?: string | null;
}
