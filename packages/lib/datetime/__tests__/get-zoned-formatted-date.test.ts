import { getZonedFormattedDate } from '../get-zoned-formatted-date'
import { parseISO } from 'date-fns'

import { DATE_FORMAT_SHORT } from '@acter/lib/constants'

describe('getZonedFormattedDate', () => {
  it('should handle timezone offsets', () => {
    const parsedDate = parseISO('2021-09-06T20:45:00+1:00')

    // Watch that this doesn't shift with timezones
    expect(getZonedFormattedDate(DATE_FORMAT_SHORT)(parsedDate)).toBe(
      '6 Sep. 20:45'
    )
  })
})
