import DialogueSequenceProgressionInfo from './DialogueSequenceProgressionInfo';
import PhoneSaveDataInfo from './PhoneSaveDataInfo';

export default interface PhoneManagerSaveData {
  /** @default {List<DialogueSequenceProgressionInfo>} */
  m_ListDialogueSequenceInfo: DialogueSequenceProgressionInfo[];
  /** @default {List<PhoneSaveDataInfo>} */
  m_ListPhoneSaveDataInfo: PhoneSaveDataInfo[];
}
