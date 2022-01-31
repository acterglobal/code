import { format } from 'date-fns/fp'
import { pipe } from 'fp-ts/function'

import { parseDateOrString } from '@acter/lib/datetime/parse-date-or-string'

export const parseAndFormat = (
  dateString: Date | string,
  formatString: string
): string => {
  if (dateString)
    return pipe(dateString, parseDateOrString, format(formatString))
}
