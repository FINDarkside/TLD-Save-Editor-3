import ProjectileType from './enums/ProjectileType';
import LocalizedString from './LocalizedString';

export default interface Panel_SprayPaintSaveDataProxy {
  ProjectileType: ProjectileType;
  m_Label: LocalizedString;
  m_ShapeIcon: unknown;
  m_AddedToMap: boolean;
  m_OnlyAllowedOneOfType: boolean;
}
