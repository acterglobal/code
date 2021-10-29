import { useQuery, UseQueryState } from 'urql'

import { ActivityType } from '@acter/schema'
import QUERY_ACTIVITY_TYPES from '@acter/schema/queries/query-activity-types.graphql'

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
