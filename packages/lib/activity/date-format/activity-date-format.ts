import { isEqual } from 'date-fns'

import { DATE_FORMAT_LONG, DATE_TIME_FORMAT_LONG } from '@acter/lib/constants'
import { parseAndFormat } from '@acter/lib/datetime/parse-and-format'
import { parseDateOrString } from '@acter/lib/datetime/parse-date-or-string'
import { Activity } from '@acter/schema'

export const activityDateFormat = (activity: Activity): string => {
  const dateFormat = activity.isAllDay
    ? DATE_FORMAT_LONG
    : DATE_TIME_FORMAT_LONG
  const endAt = parseAndFormat({
    dateString: activity.endAt,
    formatString: dateFormat,
  })
  const startAt = parseAndFormat({
    dateString: activity.startAt,
    formatString: dateFormat,
  })
  return isEqual(
    parseDateOrString(activity.startAt),
    parseDateOrString(activity.endAt)
  )
    ? `on ${startAt}`
    : `from ${startAt} to ${endAt}`
}
