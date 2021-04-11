import { pipe } from 'ramda'
import { Moment } from 'moment'
import { Activity } from '@schema'

export type ActivityFormData = Omit<Partial<Activity>, 'isOnline'> & {
  startDate?: Moment
  startTime?: Moment
  endDate?: Moment
  endTime?: Moment
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
    _setStartAndEndTime,
    _removeSeparateDateAndTime,
    _setIsOnline
  )(formData)
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
  const date = formData[`${dateTimeType}Date`] as Moment
  const time = formData[`${dateTimeType}Time`] as Moment

  if (date && time && date.isValid() && time.isValid()) {
    return {
      ...formData,
      [`${dateTimeType}At`]: date
        .hour(time.hour())
        .minute(time.minute())
        .second(time.second())
        .toDate(),
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
