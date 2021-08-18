import { format, addMinutes } from 'date-fns'

export const getZonedDate = (date: Date, formatString: string): string => {
  const timeZoneOffSetMinutes = date.getTimezoneOffset()
  const zonedDate = addMinutes(date, timeZoneOffSetMinutes)
  const formattedDate = format(zonedDate, formatString)

  return formattedDate
}
