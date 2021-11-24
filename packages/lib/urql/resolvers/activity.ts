import { NullArray, Resolver } from '@urql/exchange-graphcache'

import { parseDateOrString } from '@acter/lib/datetime/parse-date-or-string'
import { ResolverMap } from '@acter/lib/urql/resolvers'
import { parseDateField } from '@acter/lib/urql/util/parse-date-field'
import { Acter, Activity } from '@acter/schema'

type ActivityInput = {
  endAt: string
  startAt: string
}

type ActivityOutput = Pick<Activity, 'endAt' | 'startAt'>

export const activityResolvers: ResolverMap = {
  endAt: parseDateField,
  startAt: parseDateField,
}

type ActivityList = { activities: NullArray<ActivityInput> }

const setActivityDates = (activity: ActivityInput): ActivityOutput => ({
  ...activity,
  endAt: parseDateOrString(activity.endAt),
  startAt: parseDateOrString(activity.startAt),
})

export const activityListResolver: Resolver<ActivityList> = (parent) =>
  parent?.activities?.length
    ? parent.activities.map(setActivityDates)
    : undefined

type FindFirstActerWithActivity = {
  findFirstActer: Acter & {
    Activity: ActivityInput
  }
}
export const acterActivityResolver: Resolver<FindFirstActerWithActivity> = (
  parent
) => {
  if (parent.findFirstActer) {
    if (parent.findFirstActer?.Activity) {
      return {
        ...parent.findFirstActer,
        Activity: setActivityDates(parent.findFirstActer.Activity),
      }
    }
    return parent.findFirstActer
  }
  return undefined
}
