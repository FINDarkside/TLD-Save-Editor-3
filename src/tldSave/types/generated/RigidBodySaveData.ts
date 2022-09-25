import type CollisionDetectionMode from './enums/CollisionDetectionMode';

export default interface RigidBodySaveData {
  m_IsKinematic?: boolean;
  m_Velocity?: [number, number, number] | null;
  m_AngularVelocity?: [number, number, number] | null;
  m_CollisionDetectionMode?: CollisionDetectionMode;
  m_Mass?: number;
  m_Drag?: number;
  m_AngularDrag?: number;
  m_CenterOfMass?: [number, number, number] | null;
}
