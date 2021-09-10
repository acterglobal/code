import { useQuery, QueryResult } from '@apollo/client'
import { ActivityType } from '@acter/schema'
import QUERY_ACTIVITY_TYPES from '@acter/schema/queries/query-activity-types.graphql'

type UseActivityTypesData = {
  activityTypes: ActivityType[]
}

type ActivityTypesQueryResult = QueryResult<UseActivityTypesData> & {
  activityTypes: ActivityType[]
}

export const useActivityTypes = (): ActivityTypesQueryResult => {
  const queryResult = useQuery<UseActivityTypesData>(QUERY_ACTIVITY_TYPES)

  return {
    ...queryResult,
    activityTypes: queryResult?.data?.activityTypes,
  }
}
