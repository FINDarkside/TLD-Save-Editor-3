
export default interface NPC_NeedPrefabInfo {
  m_NumCalories: number;
  m_NumLiters: number;
  m_NumHours: number;
  m_NumItems: number;
  m_ItemPrefabNameMain: string;
  m_ItemPrefabNameAlt: string;
  m_MinTrustToShowNeed: number;
  m_MaxTrustToShowNeed: number;
  m_TrustIncrease: number;
  /** @default {true} */
  m_IsRepeatable: boolean;
  m_HoursBetweenRepeat: number;
}
