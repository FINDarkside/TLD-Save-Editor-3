import type BedRollState from './enums/BedRollState';

export default interface BedSaveDataProxy {
  m_BedRollState?: BedRollState;
  m_Guid?: string | null;
  m_BodyGuid?: string | null;
}
