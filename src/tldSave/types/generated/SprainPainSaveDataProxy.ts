import type AfflictionBodyArea from './enums/AfflictionBodyArea';

export default interface SprainPainSaveDataProxy {
  m_Location: AfflictionBodyArea;
  m_Cause: string;
  m_EndTime: number;
}
