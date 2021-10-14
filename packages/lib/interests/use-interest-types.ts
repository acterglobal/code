import { useQuery, UseQueryState } from 'urql'

import { InterestType } from '@acter/schema'
import QUERY_ALL_INTERESTS from '@acter/schema/queries/query-all-interests-by-type.graphql'

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
