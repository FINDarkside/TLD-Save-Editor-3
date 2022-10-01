
export default interface NPCSaveDataProxy {
  m_AfflictionsSerialized?: string | null;
  m_ConditionSerialized?: string | null;
  m_FreezingSerialized?: string | null;
  m_ThirstSerialized?: string | null;
  m_EnableConditionUpdate?: boolean;
  m_Guid?: string | null;
  m_LastUpdatedTODHours?: number;
  m_NextAmbientAudioTime?: number;
  m_HasBeenInteractedWith?: boolean;
}
