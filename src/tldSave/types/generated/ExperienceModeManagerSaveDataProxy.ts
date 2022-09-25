import type ExperienceModeType from './enums/ExperienceModeType';

export default interface ExperienceModeManagerSaveDataProxy {
  m_CurrentModeType?: ExperienceModeType;
  m_CustomModeString?: string | null;
  /** @default {ExperienceModeType.NUM_MODES} */
  m_PreviousModeType?: ExperienceModeType;
}
