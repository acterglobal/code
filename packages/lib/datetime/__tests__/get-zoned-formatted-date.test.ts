import { getZonedFormattedDate } from '../get-zoned-formatted-date'
import { parseISO } from 'date-fns'

import { DATE_FORMAT_SHORT_TZ } from '@acter/lib/constants'

describe('getZonedFormattedDate', () => {
  it('should handle timezone offsets', () => {
    const parsedDate = parseISO('2021-09-06T20:45:00')

    // Watch that this doesn't shift with timezones
    expect(getZonedFormattedDate(DATE_FORMAT_SHORT_TZ)(parsedDate)).toBe(
      '6 Sep. 18:45 GMT+2'
    )
  })

  it('should handle direct date input', () => {
    const testDate = new Date(2021, 8, 6, 20, 45, 0)
    expect(getZonedFormattedDate(DATE_FORMAT_SHORT_TZ)(testDate)).toBe(
      '6 Sep. 18:45 GMT+2'
    )
  })
})
