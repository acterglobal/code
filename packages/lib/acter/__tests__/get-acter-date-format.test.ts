import { add } from 'date-fns'

import { getActerDateFormat } from '@acter/lib/acter/get-acter-date-format'
import { DATE_FORMAT, DATE_FORMAT_NO_TIME } from '@acter/lib/constants'
import { Acter } from '@acter/schema'
import { ExampleActer, ExampleActivity } from '@acter/schema/fixtures'

describe('getActivityDateFormat', () => {
  const now = new Date()

  const acter1: Acter = {
    ...ExampleActer,
    Activity: {
      ...ExampleActivity,
      isAllDay: true,
      startAt: add(now, { days: 1 }),
      endAt: add(now, { days: 1 }),
    },
  }

  const acter2: Acter = {
    ...ExampleActer,
    Activity: {
      ...ExampleActivity,
      isAllDay: false,
      startAt: add(now, { days: 1, hours: 10 }),
      endAt: add(now, { days: 1, hours: 17 }),
    },
  }

  const displayFormatAllDay = getActerDateFormat(acter1)
  const displayFormatNotAllDay = getActerDateFormat(acter2)

  it('should return the date format without the time format included', () => {
    expect(displayFormatAllDay).toEqual(DATE_FORMAT_NO_TIME)
  })

  it('should return the date format including the time format', () => {
    expect(displayFormatNotAllDay).toEqual(DATE_FORMAT)
  })
})
