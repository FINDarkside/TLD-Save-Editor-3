import type SaveSlotType from './enums/SaveSlotType';
import type DLC from './enums/DLC';
import type Episode from './enums/Episode';

export default interface SlotData {
  m_Name?: string | null;
  m_InternalName?: string | null; //NEW
  m_DisplayName?: string | null;
  m_Timestamp?: string | null;
  m_GameMode?: SaveSlotType;
  m_GameId?: number;
  m_Episode?: Episode;
  m_InstalledOptionalContent?: Array<DLC>;
  m_Dict?: Record<(string), (Array<number> | null)> | null;
  m_IsPS4Compliant?: boolean;
  m_VersionChangelistNumber?: number;
  m_Version?: number;
}