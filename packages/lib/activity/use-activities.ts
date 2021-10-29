import { useEffect, useState } from 'react'

import { useQuery, UseQueryState } from 'urql'

import { Activity } from '@acter/schema'
import QUERY_ACTIVITIES from '@acter/schema/queries/activities-followed-by-acter.graphql'

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
