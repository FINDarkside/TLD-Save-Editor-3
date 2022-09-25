
export default interface StatContainer {
  m_StatsDictionary?: Record<(number), (string | null)> | null;
  m_NumBurntHousesInCoastal?: number;
  m_HasDoneCoastalBurntHouseCheck?: boolean;
  m_HasDoneCorrectBurntHouseCheck?: boolean;
}
