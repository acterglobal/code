import { pipe } from 'ramda'
import { Moment } from 'moment'
import { Activity } from '@schema'

type ActivityData = {
  variables: ActivityDataVariables
}

export type ActivityDataVariables = Omit<Partial<Activity>, 'isOnline'> & {
  startDate?: Moment
  startTime?: Moment
  endDate?: Moment
  endTime?: Moment
  isOnline: string | boolean
}

type DateTimeType = 'start' | 'end'

export const upsertActivity = async (
  data: ActivityData,
  mutationFn: (ActivityData) => Promise<any>
): Promise<any> => {
  return await pipe(
    _setStartAndEndTime,
    _removeSeparateDateAndTime,
    _setIsOnline,
    mutationFn
  )(data)
}

export const _setStartAndEndTime = ({
  variables,
}: ActivityData): ActivityData => {
  return ['start', 'end'].reduce(_setTimeOnDate, { variables })
}

export const _setTimeOnDate = (
  { variables }: ActivityData,
  dateTimeType: DateTimeType
): ActivityData => {
  const date = variables[`${dateTimeType}Date`] as Moment
  const time = variables[`${dateTimeType}Time`] as Moment

  if (date && time && date.isValid() && time.isValid()) {
    return {
      variables: {
        ...variables,
        [`${dateTimeType}At`]: date
          .hour(time.hour())
          .minute(time.minute())
          .second(time.second())
          .toDate(),
      },
    }
  }

  return { variables }
}

export const _removeSeparateDateAndTime = ({
  variables,
}: ActivityData): ActivityData => {
  // Create copy of data without everything before ...activity
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { startDate, startTime, endDate, endTime, ...activity } = variables

  return { variables: activity }
}

export const _setIsOnline = ({ variables }: ActivityData): ActivityData => {
  return {
    variables: {
      ...variables,
      isOnline: String(variables.isOnline) === 'true',
    },
  }
}
