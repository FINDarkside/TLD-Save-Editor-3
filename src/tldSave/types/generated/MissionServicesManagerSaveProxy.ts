import type CustomManagedObjectState from './enums/CustomManagedObjectState';

export default interface MissionServicesManagerSaveProxy {
  m_SerializedGlobalBlackboard?: string | null;
  /** @default {List<string>} */
  m_SerializedMissions?: (string | null)[] | null;
  /** @default {List<string>} */
  m_SerializedConcurrentGraphs?: (string | null)[] | null;
  /** @default {List<string>} */
  m_SerializedTimers?: (string | null)[] | null;
  m_VisibleMissionTimer?: string | null;
  /** @default {List<string>} */
  m_MissionObjectFilterTags?: (string | null)[] | null;
  /** @default {List<string>} */
  m_CustomManagedObjects?: (string | null)[] | null;
  /** @default {List<CustomManagedObjectState>} */
  m_CustomManagedObjectStates?: (CustomManagedObjectState)[] | null;
}
