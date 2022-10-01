
export default interface FlareGunRoundSaveData {
  m_InstanceID?: number;
  m_HostGuid?: string | null;
  m_LocalName?: string | null;
  m_LocalPosition?: [number, number, number] | null;
  m_LocalAngles?: [number, number, number] | null;
  m_EmbeddedDepth?: number;
  m_BurnTimer?: number;
  m_NonInteractive?: boolean;
  m_HoursPlayed?: number;
  m_ObjectLayer?: number;
  m_IsRendererEnabled?: boolean;
}
