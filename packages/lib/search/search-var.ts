import { makeVar } from '@apollo/client'

import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'
import { SearchTypes } from '@acter/lib/search/use-search-types'

export interface SearchVariables {
  searchText?: string
  interests?: string[]
  orderBy?: SearchActivitiesSortBy
  types?: SearchTypes[]
}

export const searchVar = makeVar<SearchVariables>({
  orderBy: SearchActivitiesSortBy.NAME,
})
