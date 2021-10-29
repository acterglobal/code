import { useQuery, UseQueryState } from 'urql'

import { ActerType } from '@acter/schema'
import QUERY_ACTER_TYPES from '@acter/schema/queries/query-acter-types.graphql'

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
