import type FootstepTrailType from './enums/FootstepTrailType';
import type SnowImprintType from './enums/SnowImprintType';

export default interface FootstepTrailSaveDataProxy {
  m_TrailType?: FootstepTrailType;
  m_ImprintType?: SnowImprintType;
  /** @default {List<string>} */
  m_FootstepGroups?: (string | null)[] | null;
  /** @default {List<uint>} */
  m_Footsteps?: (number)[] | null;
}
