import type BedRollState from './enums/BedRollState';

export default interface BedSaveDataProxy {
  m_BedRollState: BedRollState;
  m_Guid: string;
  m_BodyGuid: string;
}
