import { format, parseISO } from 'date-fns/fp'
import { pipe } from 'fp-ts/function'

export const parseAndFormat = (
  dateString: Date | string,
  formatString: string
): string => {
  if (typeof dateString === 'string')
    return pipe(dateString, parseISO, format(formatString))
  return pipe(dateString, format(formatString))
}
