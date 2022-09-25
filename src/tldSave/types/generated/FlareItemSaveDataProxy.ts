import type FlareState from './enums/FlareState';

export default interface FlareItemSaveDataProxy {
  m_HoursPlayed?: number;
  m_StateProxy?: FlareState;
  m_ElapsedBurnMinutesProxy?: number;
}
