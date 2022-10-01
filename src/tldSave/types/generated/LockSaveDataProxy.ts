import type LockState from './enums/LockState';

export default interface LockSaveDataProxy {
  m_LockStateProxy?: LockState;
  m_AttemptedToOpen?: boolean;
}
