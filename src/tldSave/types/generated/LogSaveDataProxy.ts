import type LogDayInfo from './LogDayInfo';

export default interface LogSaveDataProxy {
  m_GeneralNotes: string;
  m_LogDayInfoList: LogDayInfo[];
  m_TodayLogDayInfo: LogDayInfo;
  m_DayToLogEndOfDayInfo: number;
}
