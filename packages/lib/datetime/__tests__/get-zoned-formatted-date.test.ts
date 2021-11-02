import { getZonedFormattedDate } from '../get-zoned-formatted-date'
import { format, parseISO } from 'date-fns'

import { DATE_FORMAT_SHORT_TZ } from '@acter/lib/constants'

describe('getZonedFormattedDate', () => {
  // Because we might not be testing during DST
  const machineDate = new Date(2021, 8, 6, 20, 45)
  const timezoneString = format(machineDate, 'zzz')
  const offset = machineDate.getTimezoneOffset()
  const machineTime = 20 * 60 + 45 + offset
  const machineHours = Math.floor(machineTime / 60)
  const machineMinutes = Math.abs(60 * (machineHours - machineTime / 60))

  it('should handle timezone offsets', () => {
    const parsedDate = parseISO('2021-09-06T20:45:00')

    // Watch that this doesn't shift with timezones
    expect(getZonedFormattedDate(DATE_FORMAT_SHORT_TZ)(parsedDate)).toBe(
      `6 Sep. ${machineHours}:${machineMinutes} ${timezoneString}`
    )
  })

  it('should handle direct date input', () => {
    const testDate = new Date(2021, 8, 6, 20, 45, 0)
    expect(getZonedFormattedDate(DATE_FORMAT_SHORT_TZ)(testDate)).toBe(
      `6 Sep. ${machineHours}:${machineMinutes} ${timezoneString}`
    )
  })
})
