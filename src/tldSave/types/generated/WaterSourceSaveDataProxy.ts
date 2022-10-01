import type LiquidQuality from './enums/LiquidQuality';

export default interface WaterSourceSaveDataProxy {
  m_CurrentLiters?: number;
  m_CurrentLiquidQuality?: LiquidQuality;
  m_RolledSpawnChance?: boolean;
}
