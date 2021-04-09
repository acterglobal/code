import moment from 'moment'
import {
  _setTimeOnDate,
  _setStartAndEndTime,
  _removeSeparateDateAndTime,
  _setIsOnline,
  ActivityDataVariables,
} from 'src/lib/activity/prepare-activity-values'

import {ExampleActivity} from 'src/__fixtures__'

import {ORGANISATION} from 'src/constants'
import { prepareDataForValidation } from 'formik'

describe('prepareActivityValues', () => {
  let variables: ActivityDataVariables

  beforeEach(() => {
    variables = {
      ...ExampleActivity,
      startAt: undefined,
      startDate: moment.utc('2021-03-31'),
      startTime: moment.utc('1970-01-01T21:30:00'),
      endAt: undefined,
      endDate: moment.utc('2021-04-01'),
      endTime: moment.utc('1970-01-01T10:30:00'),
      isOnline: 'true',
    }
  })
  
  it('should do nothing when the Acter is NOT an Activity', () => {
    variables.Acter.ActerType.name = ORGANISATION
    expect(() => prepareDataForValidation({variables})).not.toThrow()
  })
  
  
  describe('_setStartAndEndTime', () => {
    it('should set both start and end datetime', () => {
      const data = _setStartAndEndTime({ variables })
      expect(data.variables.startAt.toISOString()).toBe(
        '2021-03-31T21:30:00.000Z'
      )
      expect(data.variables.endAt.toISOString()).toBe(
        '2021-04-01T10:30:00.000Z'
      )
    })
  })

  describe('_setTimeOnDate', () => {
    it('should handle a missing date by returning null', () => {
      const data = _setTimeOnDate(
        { variables: { ...variables, startDate: null } },
        'start'
      )
      expect(data.variables.startAt).toBeUndefined()
    })

    it('should handle a missing time by returning null', () => {
      const data = _setTimeOnDate(
        { variables: { ...variables, startTime: null } },
        'start'
      )
      expect(data.variables.startAt).toBeUndefined()
    })

    it('should handle an invalid date by returning null', () => {
      const data = _setTimeOnDate(
        { variables: { ...variables, startDate: moment('foo') } },
        'start'
      )
      expect(data.variables.startAt).toBeUndefined()
    })

    it('should handle an invalid time by returning null', () => {
      const data = _setTimeOnDate(
        { variables: { ...variables, startTime: moment('foo') } },
        'start'
      )
      expect(data.variables.startAt).toBeUndefined()
    })

    it('should create a datetime from separate date and time entries', () => {
      const data = _setTimeOnDate({ variables }, 'start')
      expect(data.variables.startAt.toISOString()).toBe(
        '2021-03-31T21:30:00.000Z'
      )
    })
  })

  describe('_removeSeparateDateAndTime', () => {
    it('should remove separate start and end date and time', () => {
      const data = _removeSeparateDateAndTime({ variables })
      //@ts-ignore
      expect(data.variables.startDate).toBeUndefined()
      //@ts-ignore
      expect(data.variables.startTime).toBeUndefined()
      //@ts-ignore
      expect(data.variables.endDate).toBeUndefined()
      //@ts-ignore
      expect(data.variables.endTime).toBeUndefined()
    })
  })

  describe('_setIsOnline', () => {
    it('should set isOnline to boolean true when string is "true"', () => {
      expect(_setIsOnline({ variables }).variables.isOnline).toBe(true)
    })
    it('should set isOnline to boolean false when string is not "true"', () => {
      expect(
        _setIsOnline({ variables: { ...variables, isOnline: 'false' } })
          .variables.isOnline
      ).toBe(false)
    })
  })
})
