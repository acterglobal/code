import { parseDateOrString } from '../parse-date-or-string'
import { isSameDay, isValid } from 'date-fns'

describe('parseDateOrString', () => {
  it('should parse a valid date string', () => {
    const parsedDate = parseDateOrString('2021-09-06T20:45:00Z')
    // Deal with timezone offsets
    const expectedMins = 45 - parsedDate.getTimezoneOffset()
    // Month is an index
    const expectedDate = new Date(2021, 8, 6, 20, expectedMins, 0)
    expect(parsedDate).toEqual(expectedDate)
  })

  it('should fail for a bad date string', () => {
    expect(isValid(parseDateOrString('foo'))).toBe(false)
  })

  it('should return a passed date', () => {
    const expectedDate = new Date(2021, 8, 6, 20, 45, 0)
    expect(
      isSameDay(
        parseDateOrString(new Date(2021, 8, 6, 20, 45, 0)),
        expectedDate
      )
    ).toBe(true)
  })
})
