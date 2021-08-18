import { parseISO } from 'date-fns'
import { getZonedDate } from '@acter/lib/datetime/getZonedDate'

export const parseAndFormat = (
  dateString: Date | string,
  formatString: string
): string => {
  if (typeof dateString === 'string') {
    const date = parseISO(dateString)
    const parsedDate = getZonedDate(date, formatString)
    return parsedDate
  }
  const parsedDate = getZonedDate(dateString, formatString)
  return parsedDate
}
