import type ContainerItemSaveData from './ContainerItemSaveData';

export default interface ContainerSaveDataProxy {
  m_Position?: [number, number, number] | null;
  m_Rotation?: [number, number, number, number] | null;
  m_ContainerFilterName?: string | null;
  m_ContainerSortName?: string | null;
  m_InspectedProxy?: boolean;
  m_CanNeverBeOpened?: boolean;
  m_RolledSpawnChanceProxy?: boolean;
  m_NotPopulated?: boolean;
  m_LockSerialized?: string | null;
  m_SafeCrackingSerialized?: string | null;
  m_MissionObjectSerialized?: string | null;
  m_OwnershipOverrideSerialized?: string | null;
  /** @default {List<string>} */
  m_GearToInstantiateSerialized?: (string | null)[] | null;
  /** @default {List<ContainerItemSaveData>} */
  m_SerializedItems?: (ContainerItemSaveData)[] | null;
}
