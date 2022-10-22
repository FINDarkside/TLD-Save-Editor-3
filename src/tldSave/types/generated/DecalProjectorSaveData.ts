import type DecalProjectorType from './enums/DecalProjectorType';
import type ProjectileType from './enums/ProjectileType';

export default interface DecalProjectorSaveData {
  m_Guid?: string | null;
  m_DecalName?: string | null;
  m_Pos?: [number, number, number] | null;
  m_Normal?: [number, number, number] | null;
  m_Scale?: [number, number, number] | null;
  m_Yaw?: number;
  m_UVRectangleIndex?: number;
  m_DecalProjectorType?: DecalProjectorType;
  m_HoursAtCreateTime?: number;
  m_LifeTimeHours?: number;
  m_Indoors?: boolean;
  m_ColorTint?: [number, number, number, number] | null;
  m_RevealedOnMap?: boolean;
  m_FadeOverEntireLifetime?: boolean;
  m_ProjectileType?: ProjectileType;
}
