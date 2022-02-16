import { DATE_FORMAT, DATE_FORMAT_NO_TIME } from '@acter/lib/constants'
import { Activity } from '@acter/schema'

/**
 * @param activity current activity
 * @returns activity display date
 */

export const getActivityDateFormat = (activity: Activity): string => {
  return activity.isAllDay ? DATE_FORMAT_NO_TIME : DATE_FORMAT
}
