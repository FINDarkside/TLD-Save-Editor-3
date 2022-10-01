import type WaterSourceSaveData from './WaterSourceSaveData';

export default interface WaterSourceSaveList {
  /** @default {List<WaterSourceSaveData>} */
  m_SerializedWaterSources?: (WaterSourceSaveData)[] | null;
}
