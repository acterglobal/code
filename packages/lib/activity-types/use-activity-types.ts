import { useQuery, UseQueryState } from 'urql'

import QUERY_ACTIVITY_TYPES from '@acter/lib/graphql/queries/query-activity-types.graphql'
import { ActivityType } from '@acter/schema'

type UseActivityTypesData = {
  activityTypes: ActivityType[]
}

type ActivityTypeQueryState = UseQueryState<UseActivityTypesData> & {
  activityTypes: ActivityType[]
}

export const useActivityTypes = (): ActivityTypeQueryState => {
  const [result] = useQuery({ query: QUERY_ACTIVITY_TYPES })

  return {
    ...result,
    activityTypes: result?.data?.activityTypes,
  }
}
