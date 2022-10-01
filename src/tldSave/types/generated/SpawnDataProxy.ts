import type AiMode from './enums/AiMode';

export default interface SpawnDataProxy {
  m_Position?: [number, number, number] | null;
  m_Rotation?: [number, number, number, number] | null;
  m_AiMode?: AiMode;
  m_Guid?: string | null;
  m_BaseAiSerialized?: string | null;
}
