import { format, addMinutes } from 'date-fns'

export const getZonedFormattedDate = (formatString: string) => (
  date: Date
): string => {
  const timeZoneOffSetMinutes = date?.getTimezoneOffset()
  const zonedDate = addMinutes(date, timeZoneOffSetMinutes)
  const formattedDate = format(zonedDate, formatString)

  return formattedDate
}
