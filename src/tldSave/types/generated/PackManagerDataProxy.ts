
export default interface PackManagerDataProxy {
  m_LeaderGuid?: string | null;
  m_Time?: number;
  /** @default {List<string>} */
  m_MemberGuids?: (string | null)[] | null;
  m_FormationCount?: number;
  m_PackMoraleModifier?: number;
}
