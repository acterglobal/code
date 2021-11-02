import { format, addMinutes } from 'date-fns'

export const getZonedFormattedDate = (formatString: string) => (
  date: Date
): string => {
  const dateTimeZoneOffsetMinutes = date?.getTimezoneOffset()
  const zonedDate = addMinutes(date, dateTimeZoneOffsetMinutes)
  const formattedDate = format(zonedDate, formatString)

  return formattedDate
}
