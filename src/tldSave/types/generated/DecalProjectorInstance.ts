import type DecalProjectorType from './enums/DecalProjectorType';
import type ProjectileType from './enums/ProjectileType';

export default interface DecalProjectorInstance {
  m_Guid?: string | null;
  m_DecalName?: string | null;
  m_DecalProjectorType?: DecalProjectorType;
  m_HoursAtCreateTime?: number;
  m_LifeTimeHours?: number;
  m_Indoors?: boolean;
  m_Pos?: [number, number, number] | null;
  m_Normal?: [number, number, number] | null;
  m_Scale?: [number, number, number] | null;
  m_Yaw?: number;
  m_CreateUVRectangleIndex?: number;
  m_Alpha?: number;
  m_WasRendered?: boolean;
  m_ColorTint?: [number, number, number, number] | null;
  m_IsPlacing?: boolean;
  m_IsRevealing?: boolean;
  m_RevealAmount?: number;
  m_EraseAmount?: number;
  m_RevealedOnMap?: boolean;
  m_ProjectileType?: ProjectileType;
  m_SpawnedObject?: unknown;
  m_MaskData?: (unknown)[] | null;
  m_FadeOverEntireLifetime?: boolean;
}
