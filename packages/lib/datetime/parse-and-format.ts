import { format } from 'date-fns'

export const parseAndFormat = (
  dateString: Date | string,
  allDay?: boolean,
  timeFormat?: string
): string => {
  if (typeof dateString === 'string') {
    if (allDay == true) {
      const parsedDate = new Date(Date.parse(dateString))
      const dateNoTime = format(parsedDate, timeFormat)
      return dateNoTime
    } else if (!allDay && timeFormat) {
      const parsedDateTime = new Date(Date.parse(dateString))
      const dateTime = format(parsedDateTime, timeFormat)
      return dateTime
    }
    // Convert dateString to typeof Date
    const parsedDate = new Date(Date.parse(dateString))
    // Convert date into UTC string
    const dateUTC = parsedDate.toUTCString()

    // Remove GMT from date display
    const dateUTCWithoutGMT = dateUTC.slice(0, 22)

    return dateUTCWithoutGMT
  }
  const dateUTC = dateString.toUTCString()
  const dateUTCWithoutGMT = dateUTC.slice(0, 22)
  return dateUTCWithoutGMT
}
