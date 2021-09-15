import { useQuery, QueryResult } from '@apollo/client'

import { ActerType } from '@acter/schema'
import QUERY_ACTER_TYPES from '@acter/schema/queries/query-acter-types.graphql'

type UseActerTypesData = {
  acterTypes: ActerType[]
}

type ActerTypesQueryResult = QueryResult<UseActerTypesData> & {
  acterTypes: ActerType[]
}

export const useActerTypes = (): ActerTypesQueryResult => {
  const queryResult = useQuery<UseActerTypesData>(QUERY_ACTER_TYPES)

  return {
    ...queryResult,
    acterTypes: queryResult?.data?.acterTypes,
  }
}
