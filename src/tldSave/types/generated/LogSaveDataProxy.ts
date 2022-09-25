import type LogDayInfo from './LogDayInfo';

export default interface LogSaveDataProxy {
  m_GeneralNotes?: string | null;
  m_LogDayInfoList?: (LogDayInfo)[] | null;
  m_TodayLogDayInfo?: LogDayInfo;
  m_DayToLogEndOfDayInfo?: number;
}
