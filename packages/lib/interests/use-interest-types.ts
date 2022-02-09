import { useQuery, UseQueryState } from 'urql'

import QUERY_ALL_INTERESTS from '@acter/lib/graphql/queries/query-all-interests-by-type.graphql'
import { InterestType } from '@acter/schema'

type UseInterestTypesData = {
  interestTypes: InterestType[]
}

type InterestTypesQueryResult = UseQueryState<UseInterestTypesData> &
  UseInterestTypesData

export const useInterestTypes = (): InterestTypesQueryResult => {
  const [{ data, ...restResult }] = useQuery<UseInterestTypesData>({
    query: QUERY_ALL_INTERESTS,
  })

  return {
    ...restResult,
    interestTypes: data?.interestTypes,
  }
}
