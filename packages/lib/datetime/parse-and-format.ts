import { formatWithOptions } from 'date-fns/fp'
import { pipe } from 'fp-ts/function'

import { getDateTimeLocale } from '@acter/lib/datetime/get-data-time-locale'
import { parseDateOrString } from '@acter/lib/datetime/parse-date-or-string'

type params = {
  dateString: Date | string
  formatString: string
  currentLocale?: string
}

export const parseAndFormat = ({
  dateString,
  formatString,
  currentLocale = 'en-GB',
}: params): string => {
  const locale = getDateTimeLocale(currentLocale)
  if (dateString)
    return pipe(
      dateString,
      parseDateOrString,
      formatWithOptions({ locale }, formatString)
    )
}
