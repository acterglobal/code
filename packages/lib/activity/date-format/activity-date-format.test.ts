import { add } from 'date-fns'

import { ExampleActivity } from '@acter/schema/fixtures'

import { activityDateFormat } from './activity-date-format'

describe('activityDateFormat', () => {
  it('should display a single date with no time when the event is all day on the same day', () => {
    const startAt = new Date(2022, 3, 29, 11)
    const endAt = startAt
    expect(
      activityDateFormat({
        ...ExampleActivity,
        startAt,
        endAt,
        isAllDay: true,
      })
    ).toBe('on Friday, 29 April 2022')
  })

  it('should display two dates with no time when the event is all day across days', () => {
    const startAt = new Date(2022, 3, 29, 11)
    const endAt = add(startAt, { days: 1 })
    expect(
      activityDateFormat({
        ...ExampleActivity,
        startAt,
        endAt,
        isAllDay: true,
      })
    ).toBe('from Friday, 29 April 2022 to Saturday, 30 April 2022')
  })

  it('should display a single date with time when the event on the same day and time', () => {
    const startAt = new Date(2022, 3, 29, 11)
    const endAt = startAt
    expect(
      activityDateFormat({
        ...ExampleActivity,
        startAt,
        endAt,
        isAllDay: false,
      })
    ).toBe('on Friday, 29 April 2022 at 11:00')
  })

  it('should display two dates with time when the event is across days', () => {
    const startAt = new Date(2022, 3, 29, 11)
    const endAt = add(startAt, { days: 1 })
    expect(
      activityDateFormat({
        ...ExampleActivity,
        startAt,
        endAt,
        isAllDay: false,
      })
    ).toBe(
      'from Friday, 29 April 2022 at 11:00 to Saturday, 30 April 2022 at 11:00'
    )
  })
})
