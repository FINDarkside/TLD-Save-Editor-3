import type SaveSlotType from './enums/SaveSlotType';
import type Episode from './enums/Episode';

export default interface SlotData {
  m_Name?: string | null;
  m_BaseName?: string | null;
  m_DisplayName?: string | null;
  m_Timestamp?: string | null;
  m_GameMode?: SaveSlotType;
  m_GameId?: number;
  m_Episode?: Episode;
  m_Dict?: Record<(string), (Array<number> | null)> | null;
  m_IsPS4Compliant?: boolean;
  m_VersionChangelistNumber?: number;
}
