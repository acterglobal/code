import { add } from 'date-fns'

import { getActivityDateFormat } from '@acter/lib/activity/get-activity-date-format'
import { DATE_FORMAT, DATE_FORMAT_NO_TIME } from '@acter/lib/constants'
import { Activity } from '@acter/schema'
import { ExampleActer, ExampleActivity } from '@acter/schema/fixtures'

describe('getActivityDateFormat', () => {
  const now = new Date()

  const activity1: Activity = {
    ...ExampleActivity,
    Acter: {
      ...ExampleActer,
      name: 'activity1',
    },
    id: '7be9ed48-99dc-4d9a-ac1b-013d9f0e60c4',
    isAllDay: true,
    startAt: add(now, { days: 1 }),
    endAt: add(now, { days: 1 }),
  }

  const activity2: Activity = {
    ...ExampleActivity,
    Acter: {
      ...ExampleActer,
      name: 'activity1',
    },
    id: '7be9ed48-99dc-4d9a-ac1b-013d9f0e60c4',
    isAllDay: false,
    startAt: add(now, { days: 1, hours: 10 }),
    endAt: add(now, { days: 1, hours: 17 }),
  }
  const displayFormatAllDay = getActivityDateFormat(activity1)
  const displayFormatNotAllDay = getActivityDateFormat(activity2)

  it('should return the date format without the time format included', () => {
    expect(displayFormatAllDay).toEqual(DATE_FORMAT_NO_TIME)
  })

  it('should return the date format including the time format', () => {
    expect(displayFormatNotAllDay).toEqual(DATE_FORMAT)
  })
})
