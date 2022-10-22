import type DecalProjectorSaveData from './DecalProjectorSaveData';

export default interface DecalProjectorSaveList {
  /** @default {List<DecalProjectorSaveData>} */
  m_SerializedDecalProjectors?: (DecalProjectorSaveData)[] | null;
}
