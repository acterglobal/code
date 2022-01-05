import { differenceInDays, format, formatRelative } from 'date-fns'

import { DD_MMM_YYYY_FORMAT } from '@acter/lib/constants'
import { parseDateOrString } from '@acter/lib/datetime/parse-date-or-string'

/**
 * Give post's date information
 * @param postDate post's date
 * @returns formatted timestamp info
 */
export const getPostTimeStamp = (postDate: Date): string =>
  differenceInDays(parseDateOrString(postDate), new Date()) <= -7
    ? format(parseDateOrString(postDate), DD_MMM_YYYY_FORMAT)
    : formatRelative(parseDateOrString(postDate), new Date())
