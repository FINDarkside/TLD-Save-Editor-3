import type TorchState from './enums/TorchState';

export default interface TorchItemSaveDataProxy {
  m_HoursPlayed?: number;
  m_StateProxy?: TorchState;
  m_ElapsedBurnMinutesProxy?: number;
  m_Thrown?: boolean;
}
