import type MissionObjectClass from './enums/MissionObjectClass';

export default interface MissionObjectIdentifierSaveProxy {
  m_Id?: string | null;
  m_ObjectClass?: MissionObjectClass;
  m_ActivityTags?: string | null;
  m_DestroyAfterMission?: boolean;
}
