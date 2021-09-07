import { DATE_FORMAT_SHORT } from '@acter/lib/constants'
import { parseAndFormat } from '../parse-and-format'

describe('parseAndFormat', () => {
  it('should format an ISO date string', () => {
    expect(parseAndFormat('2021-09-06T20:45:00+1:00', DATE_FORMAT_SHORT)).toBe(
      '6 Sep. 20:45'
    )
  })

  it('should format a date', () => {
    // Handle tz offset
    const now = new Date()
    const mins = 45 - now.getTimezoneOffset()
    expect(
      parseAndFormat(new Date(2021, 8, 6, 20, mins, 0), DATE_FORMAT_SHORT)
    ).toBe('6 Sep. 20:45')
  })
})
