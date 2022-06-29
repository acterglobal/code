import { useEffect, useState } from 'react'

import { useQuery, UseQueryState } from 'urql'

import { ActivitiesDateFilter } from '@acter/lib/constants'
import { Activity } from '@acter/schema'
import QUERY_ACTIVITIES from '@acter/schema/queries/activities-followed-by-acter.graphql'

type UseActivitiesData = {
  activities: Activity[]
}
type UseActivitiesVariables = {
  followerId: string
  dateFilter: ActivitiesDateFilter
}

type UseActivitiesResponse = UseQueryState<UseActivitiesData> &
  UseActivitiesData

type Params = {
  followerId: string
  dateFilter?: ActivitiesDateFilter
}

export const useActivities = ({
  followerId,
  dateFilter = ActivitiesDateFilter.ALL,
}: Params): UseActivitiesResponse => {
  const [activities, setActivities] = useState<Activity[]>()

  const [{ data, ...restQueryResult }] = useQuery<
    UseActivitiesData,
    UseActivitiesVariables
  >({
    query: QUERY_ACTIVITIES,
    pause: !followerId,
    variables: { followerId, dateFilter },
  })

  useEffect(() => {
    if (data) {
      setActivities(data.activities)
    }
  }, [data])

  return { ...restQueryResult, activities }
}
