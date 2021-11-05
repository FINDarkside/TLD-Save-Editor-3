import type MissionObjectClass from './enums/MissionObjectClass';

export default interface MissionObjectIdentifier {
  m_Id: string;
  m_ObjectClass: MissionObjectClass;
  m_ActivityTags: string;
  m_DestroyAfterMission: boolean;
  m_BaseAiOnlySerializeIfActive: boolean;
  m_IsUnique: boolean;
  m_NumTags: number;
  m_SkipSaveManagedItemTest: boolean;
}
