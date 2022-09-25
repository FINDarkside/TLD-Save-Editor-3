import type IndoorWardData from './IndoorWardData';

export default interface InvisibleEntityManagerGlobalDataProxy {
  m_AttackMovementSpeed?: number;
  m_MovementSpeedOverride?: number;
  m_AttackTime?: number;
  m_EntityToPlayerPosition?: [number, number, number] | null;
  m_EntityToPlayerOrientation?: number;
  m_StartMovementDelayTimeSeconds?: number;
  m_BehaviorIndex?: number;
  m_AccumulatedTimeSeconds?: number;
  m_AccumulatedRealTimeSeconds?: number;
  m_IndoorWardLocations?: (IndoorWardData)[] | null;
}
