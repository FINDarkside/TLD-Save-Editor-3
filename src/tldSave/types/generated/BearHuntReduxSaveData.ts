import type BearEncounterInfo from './BearEncounterInfo';

export default interface BearHuntReduxSaveData {
  m_DeprecatedActive?: boolean;
  m_Completed?: boolean;
  m_DeprecatedTreeEncounterWonCount?: number;
  /** @default {List<BearEncounterInfo>} */
  m_BearEncounterInfoList?: (BearEncounterInfo)[] | null;
  m_PlayerDiesAfterSpearMiss?: boolean;
}
