import { useEffect, useState } from 'react'

import { QueryResult, useLazyQuery } from '@apollo/client'

import { Activity } from '@acter/schema'
import QUERY_ACTIVITIES from '@acter/schema/queries/activities-followed-by-acter.graphql'

type UseActivitiesData = {
  activities: Activity[]
}

type UseActivitiesResult = QueryResult & UseActivitiesData

export const useActivities = (followerId: string): UseActivitiesResult => {
  const [activities, setActivities] = useState<Activity[]>()

  const [fetchActivities, { data, ...restQueryResult }] = useLazyQuery(
    QUERY_ACTIVITIES
  )

  useEffect(() => {
    if (followerId) {
      fetchActivities({ variables: { followerId } })
    }
  }, [followerId])

  useEffect(() => {
    if (data) {
      setActivities(data.activities)
    }
  }, [data])

  return { ...restQueryResult, activities } as UseActivitiesResult
}
