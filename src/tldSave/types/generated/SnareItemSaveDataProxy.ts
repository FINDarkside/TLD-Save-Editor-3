import type SnareState from './enums/SnareState';

export default interface SnareItemSaveDataProxy {
  m_HoursPlayed: number;
  m_HoursAtLastRoll: number;
  m_State: SnareState;
}
