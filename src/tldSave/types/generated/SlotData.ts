import type SaveSlotType from './enums/SaveSlotType';
import type Episode from './enums/Episode';

export default interface SlotData {
  m_Name: string;
  m_BaseName: string;
  m_DisplayName: string;
  m_Timestamp: string;
  m_GameMode: SaveSlotType;
  m_GameId: number;
  m_Episode: Episode;
  m_Dict: Record<string, Array<number>>;
  m_IsPS4Compliant: boolean;
  m_VersionChangelistNumber: number;
}
