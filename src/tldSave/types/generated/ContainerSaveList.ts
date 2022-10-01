import type ContainerSaveData from './ContainerSaveData';

export default interface ContainerSaveList {
  /** @default {List<ContainerSaveData>} */
  m_SerializedContainers?: (ContainerSaveData)[] | null;
}
