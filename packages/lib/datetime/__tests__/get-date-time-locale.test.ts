import { da, enGB } from 'date-fns/locale'

import { getDateTimeLocale } from '@acter/lib/datetime/get-data-time-locale'

describe('getDateTimeLocale', () => {
  test('should give date-fns format locale by given locale', () => {
    expect(getDateTimeLocale('en-GB')).toBe(enGB)
    expect(getDateTimeLocale('da-DK')).toBe(da)
  })
})
