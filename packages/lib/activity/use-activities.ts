import { useState, useEffect } from 'react'
import { useQuery, ApolloError, QueryResult } from '@apollo/client'
import GET_ACTIVITIES from '@acter/schema/queries/get-activities-by-user.graphql'
import { Activity } from '@acter/schema/types'

type UseActivitiesData = {
  data: Activity[]
}

type UseActivitiesVariables = {
  userId: string
}

type UseActivitiesError = Error | ApolloError

type ActivitiesQueryResult = Omit<
  QueryResult<UseActivitiesData, UseActivitiesVariables>,
  'error'
> & { error: UseActivitiesError }

/**
 * Get list of activities of the user
 * @param userId user's id
 * @returns all activities belongs to user
 */
export const useActivities = (
  userId: string
): [Activity[], ActivitiesQueryResult] => {
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<UseActivitiesError>()

  const {
    loading: dataLoading,
    error: dataError,
    ...restQueryResult
  } = useQuery(GET_ACTIVITIES, {
    variables: { userId },
    onCompleted: ({ activities }) => setActivities(activities),
  })

  useEffect(() => {
    setLoading(dataLoading)
  }, [dataLoading])

  useEffect(() => {
    setErrors(dataError)
  }, [dataError])

  return [
    activities,
    { ...(restQueryResult as ActivitiesQueryResult), loading, error: errors },
  ]
}
