import { useQuery } from '@apollo/client'
import { ActivityType } from '@acter/schema'
import QUERY_ACTIVITY_TYPES from '@acter/schema/queries/query-activity-types.graphql'

export const useActivityTypes = (): [ActivityType[]] => {
  const { data } = useQuery(QUERY_ACTIVITY_TYPES, {})

  return [data?.activityTypes]
}
