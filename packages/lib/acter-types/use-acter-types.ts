import { useQuery, UseQueryState } from 'urql'

import QUERY_ACTER_TYPES from '@acter/lib/graphql/queries/query-acter-types.graphql'
import { ActerType } from '@acter/schema'

type UseActerTypesData = {
  acterTypes: ActerType[]
}

type ActerTypesQueryState = UseQueryState<UseActerTypesData> & {
  acterTypes: ActerType[]
}

export const useActerTypes = (): ActerTypesQueryState => {
  const [result] = useQuery<UseActerTypesData>({ query: QUERY_ACTER_TYPES })

  return {
    ...result,
    acterTypes: result?.data?.acterTypes,
  }
}
