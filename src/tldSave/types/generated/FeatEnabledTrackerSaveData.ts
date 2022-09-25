import type FeatType from './enums/FeatType';

export default interface FeatEnabledTrackerSaveData {
  m_FeatsEnabledThisSandbox?: (FeatType)[] | null;
}
