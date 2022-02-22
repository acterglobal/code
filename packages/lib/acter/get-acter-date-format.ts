import { DATE_FORMAT, DATE_FORMAT_NO_TIME } from '@acter/lib/constants'
import { Acter } from '@acter/schema'

/**
 * @param acter current acter
 * @returns acter display date
 */

export const getActerDateFormat = (acter: Acter): string => {
  return acter.Activity?.isAllDay ? DATE_FORMAT_NO_TIME : DATE_FORMAT
}
