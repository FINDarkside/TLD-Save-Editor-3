import type FireState from './enums/FireState';

export default interface FireSaveDataProxy {
  m_HoursPlayed?: number;
  m_Position?: [number, number, number] | null;
  m_Rotation?: [number, number, number, number] | null;
  m_FireStateProxy?: FireState;
  m_ElapsedOnTODSecondsProxy?: number;
  m_ElapsedOnTODSecondsUnmodifiedProxy?: number;
  m_MaxOnTODSecondsProxy?: number;
  m_HeatSourceSerialized?: string | null;
  m_CampfireSerialized?: string | null;
  m_FuelHeatIncrease?: number;
  m_EmberTimer?: number;
  m_FullBurnTriggered?: boolean;
  m_StartedByPlayer?: boolean;
  m_NumGeneratedCharcoalPieces?: number;
  m_HasCollectedCharcoal?: boolean;
  m_TrackedBurntItems?: Array<string | null> | null;
}
