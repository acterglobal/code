import moment from 'moment'
import {
  _setTimeOnDate,
  _setStartAndEndTime,
  _removeSeparateDateAndTime,
  _setIsOnline,
  ActivityFormData,
} from '@acter/lib/acter/prepare-activity-values'

import { ExampleActivity } from 'src/__fixtures__'

import { ActerTypes } from 'src/constants'
import { prepareDataForValidation } from 'formik'

describe('prepareActivityValues', () => {
  let formData: ActivityFormData

  beforeEach(() => {
    formData = {
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
    formData.Acter.ActerType.name = ActerTypes.ORGANISATION
    expect(() => prepareDataForValidation({ formData })).not.toThrow()
  })

  describe('_setStartAndEndTime', () => {
    it('should set both start and end datetime', () => {
      const data = _setStartAndEndTime(formData)
      expect(data.startAt.toISOString()).toBe('2021-03-31T21:30:00.000Z')
      expect(data.endAt.toISOString()).toBe('2021-04-01T10:30:00.000Z')
    })
  })

  describe('_setTimeOnDate', () => {
    it('should handle a missing date by returning null', () => {
      const data = _setTimeOnDate({ ...formData, startDate: null }, 'start')
      expect(data.startAt).toBeUndefined()
    })

    it('should handle a missing time by returning null', () => {
      const data = _setTimeOnDate({ ...formData, startTime: null }, 'start')
      expect(data.startAt).toBeUndefined()
    })

    it('should handle an invalid date by returning null', () => {
      const data = _setTimeOnDate(
        { ...formData, startDate: moment('foo') },
        'start'
      )
      expect(data.startAt).toBeUndefined()
    })

    it('should handle an invalid time by returning null', () => {
      const data = _setTimeOnDate(
        { ...formData, startTime: moment('foo') },
        'start'
      )
      expect(data.startAt).toBeUndefined()
    })

    it('should create a datetime from separate date and time entries', () => {
      const data = _setTimeOnDate(formData, 'start')
      expect(data.startAt.toISOString()).toBe('2021-03-31T21:30:00.000Z')
    })
  })

  describe('_removeSeparateDateAndTime', () => {
    it('should remove separate start and end date and time', () => {
      const data = _removeSeparateDateAndTime(formData)
      //@ts-ignore
      expect(data.startDate).toBeUndefined()
      //@ts-ignore
      expect(data.startTime).toBeUndefined()
      //@ts-ignore
      expect(data.endDate).toBeUndefined()
      //@ts-ignore
      expect(data.endTime).toBeUndefined()
    })
  })

  describe('_setIsOnline', () => {
    it('should set isOnline to boolean true when string is "true"', () => {
      expect(_setIsOnline(formData).isOnline).toBe(true)
    })
    it('should set isOnline to boolean false when string is not "true"', () => {
      expect(_setIsOnline({ ...formData, isOnline: 'false' }).isOnline).toBe(
        false
      )
    })
  })
})
