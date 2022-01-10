import { differenceInMilliseconds } from 'date-fns'
import { pipe } from 'fp-ts/function'

import { parseDateOrString } from '@acter/lib/datetime/parse-date-or-string'
import { Acter, Activity } from '@acter/schema'

type ActivityMap = Record<string, Activity>
interface ActivityResult {
  allActivities: Activity[]
  futureActivities: Activity[]
}

export const getActivitiesForActerByStartAt = (
  acter: Acter
): ActivityResult => {
  const allActivities = pipe(
    acter,
    _getFollowedActivitiesMap,
    _addMissingOrganisedActivities(acter),
    Object.values,
    sortActivitiesByStartAt
  )
  const now = new Date()
  const futureActivities = getActivitiesAfterDate(allActivities, now)
  return { allActivities, futureActivities }
}

/**
 * Create a map of followed Activities
 * @param acter The Acter for which we want followed Activities
 * @returns A map of Activities followed
 */
export const _getFollowedActivitiesMap = (acter: Acter): ActivityMap =>
  acter.Following.reduce(
    (memo, { Following: { Activity } }) =>
      Activity ? { ...memo, [Activity.id]: Activity } : memo,
    {}
  )

export const _addMissingOrganisedActivities = (acter: Acter) => (
  followed: ActivityMap
): ActivityMap =>
  acter.ActivitiesOrganized.reduce(
    (memo, activity) =>
      memo[activity.id] ? memo : { ...memo, [activity.id]: activity },
    followed
  )

export const sortActivitiesByStartAt = (activities: Activity[]): Activity[] =>
  [...activities].sort((a, b) =>
    differenceInMilliseconds(
      parseDateOrString(a.startAt),
      parseDateOrString(b.startAt)
    )
  )

export const getActivitiesAfterDate = (
  activities: Activity[],
  afterDate: Date
): Activity[] =>
  activities.filter(
    (a) => differenceInMilliseconds(parseDateOrString(a.endAt), afterDate) >= 0
  )

/**
 * Gives upcoming activities based on given number if specified
 * @param activities
 * @param numberOfActivities(optional) number of activities to return
 * @returns upcoming activities
 */
export const getUpcomingActivities = (
  activities: Activity[],
  numberOfActivities = null
): Activity[] => {
  const sortedActivities = sortActivitiesByStartAt(activities)
  const upcomingActivities = getActivitiesAfterDate(
    sortedActivities,
    new Date()
  )
  return numberOfActivities
    ? upcomingActivities.slice(0, numberOfActivities)
    : upcomingActivities
}
