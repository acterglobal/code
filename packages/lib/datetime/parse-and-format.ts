import { pipe } from 'fp-ts/function'
import { getZonedFormattedDate } from '@acter/lib/datetime/get-zoned-formatted-date'
import { parseDateOrString } from '@acter/lib/datetime/parse-date-or-string'

export const parseAndFormat = (
  dateString: Date | string,
  formatString: string
): string => {
  return pipe(
    dateString,
    parseDateOrString,
    getZonedFormattedDate(formatString)
  )
}
