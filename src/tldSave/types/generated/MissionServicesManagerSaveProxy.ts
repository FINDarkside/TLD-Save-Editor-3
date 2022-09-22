import type CustomManagedObjectState from './enums/CustomManagedObjectState';

export default interface MissionServicesManagerSaveProxy {
  m_SerializedGlobalBlackboard: string;
  /** @default {List<string>} */
  m_SerializedMissions: string[];
  /** @default {List<string>} */
  m_SerializedConcurrentGraphs: string[];
  /** @default {List<string>} */
  m_SerializedTimers: string[];
  m_VisibleMissionTimer: string;
  /** @default {List<string>} */
  m_MissionObjectFilterTags: string[];
  /** @default {List<string>} */
  m_CustomManagedObjects: string[];
  /** @default {List<CustomManagedObjectState>} */
  m_CustomManagedObjectStates: CustomManagedObjectState[];
}
