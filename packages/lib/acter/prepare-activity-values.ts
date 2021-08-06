import {
  getYear,
  getMonth,
  getDate,
  getHours,
  getMinutes,
  minutesToHours,
  isValid,
} from 'date-fns'
import { pipe } from 'fp-ts/function'
import { Activity } from '@acter/schema'

export type ActivityFormData = Omit<Partial<Activity>, 'isOnline'> & {
  startDate?: Date
  startTime?: Date
  endDate?: Date
  endTime?: Date
  isOnline?: string | boolean
}

type DateTimeType = 'start' | 'end'

/**
 * Prepares provided data for an update to an Activity
 * @param values Values with which to update Activity
 * @param mutationFn
 * @returns
 */
export const prepareActivityValues = (
  formData: ActivityFormData
): ActivityFormData => {
  return pipe(
    formData,
    _setStartAndEndTime,
    _removeSeparateDateAndTime,
    _setIsOnline
  )
}

export const _setStartAndEndTime = (
  formData: ActivityFormData
): ActivityFormData => {
  return ['start', 'end'].reduce(_setTimeOnDate, formData)
}

export const _setTimeOnDate = (
  formData: ActivityFormData,
  dateTimeType: DateTimeType
): ActivityFormData => {
  const date = formData[`${dateTimeType}Date`] as Date
  const time = formData[`${dateTimeType}Time`] as Date

  if (date && isValid(date)) {
    const year = getYear(date)
    const month = getMonth(date)
    const day = getDate(date)

    if (time && isValid(time)) {
      // Make sure we're not doing a funny offset with summer/standard time differences
      const hours =
        getHours(time) +
        minutesToHours(date.getTimezoneOffset() - time.getTimezoneOffset())
      const minutes = getMinutes(time)
      const seconds = 0
      const datetime = new Date(
        Date.UTC(year, month, day, hours, minutes, seconds)
      )
      return {
        ...formData,
        [`${dateTimeType}At`]: datetime,
      }
    }

    // We just return the date with the time set to 00:00
    return {
      ...formData,
      [`${dateTimeType}At`]: new Date(Date.UTC(year, month, day, 0, 0, 0)),
    }
  }

  return formData
}

export const _removeSeparateDateAndTime = (
  formData: ActivityFormData
): ActivityFormData => {
  // Create copy of data without everything before ...activity
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { startDate, startTime, endDate, endTime, ...activity } = formData

  return activity
}

export const _setIsOnline = (formData: ActivityFormData): ActivityFormData => {
  return {
    ...formData,
    isOnline: String(formData.isOnline) === 'true',
  }
}
