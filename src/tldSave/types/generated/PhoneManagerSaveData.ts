import type DialogueSequenceProgressionInfo from './DialogueSequenceProgressionInfo';
import type PhoneSaveDataInfo from './PhoneSaveDataInfo';

export default interface PhoneManagerSaveData {
  /** @default {List<DialogueSequenceProgressionInfo>} */
  m_ListDialogueSequenceInfo?: (DialogueSequenceProgressionInfo)[] | null;
  /** @default {List<PhoneSaveDataInfo>} */
  m_ListPhoneSaveDataInfo?: (PhoneSaveDataInfo)[] | null;
}
