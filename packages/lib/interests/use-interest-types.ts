import { useQuery, QueryResult } from '@apollo/client'

import { InterestType } from '@acter/schema'
import QUERY_ALL_INTERESTS from '@acter/schema/queries/query-all-interests-by-type.graphql'

type UseInterestTypesData = {
  interestTypes: InterestType[]
}

type InterestTypesQueryResult = QueryResult<UseInterestTypesData> &
  UseInterestTypesData

export const useInterestTypes = (): InterestTypesQueryResult => {
  const queryResult = useQuery<UseInterestTypesData>(QUERY_ALL_INTERESTS)

  return {
    ...queryResult,
    interestTypes: queryResult?.data?.interestTypes,
  }
}
