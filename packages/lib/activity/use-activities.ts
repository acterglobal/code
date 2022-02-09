import { useEffect, useState } from 'react'

import { useQuery, UseQueryState } from 'urql'

import QUERY_ACTIVITIES from '@acter/lib/graphql/queries/activities-followed-by-acter.graphql'
import { Activity } from '@acter/schema'

type UseActivitiesData = {
  activities: Activity[]
}

type UseActivitiesResponse = UseQueryState<UseActivitiesData> &
  UseActivitiesData

export const useActivities = (followerId: string): UseActivitiesResponse => {
  const [activities, setActivities] = useState<Activity[]>()

  const [{ data, ...restQueryResult }] = useQuery({
    query: QUERY_ACTIVITIES,
    pause: !followerId,
    variables: { followerId },
  })

  useEffect(() => {
    if (data) {
      setActivities(data.activities)
    }
  }, [data])

  return { ...restQueryResult, activities }
}
