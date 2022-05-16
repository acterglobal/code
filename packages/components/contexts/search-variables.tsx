import React, { createContext, FC, useContext, useState } from 'react'

import { SearchActivitiesDateFilter } from '@acter/lib/api/resolvers/date-filter'
import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'
import { ActerTypes, ActivityTypes } from '@acter/lib/constants'

export interface SearchVariables {
  searchText?: string
  interests?: string[]
  orderBy?: SearchActivitiesSortBy
  types?: ActerTypes[]
  activityTypes?: ActivityTypes[]
  dateFilter?: SearchActivitiesDateFilter
  north?: number
  east?: number
  south?: number
  west?: number
}

const searchVariableDefaults: SearchVariables = {
  orderBy: SearchActivitiesSortBy.NAME,
  dateFilter: SearchActivitiesDateFilter.UPCOMING,
}

export type TSearchVariablesContext = [
  variables: SearchVariables,
  setVariables: (variables: SearchVariables) => void
]

export const SearchVariablesContext = createContext<TSearchVariablesContext>([
  searchVariableDefaults,
  () => null,
])

export const SearchVariablesProvider: FC = (props) => {
  const [variables, setVariables] = useState<SearchVariables>(
    searchVariableDefaults
  )

  return (
    <SearchVariablesContext.Provider value={[variables, setVariables]}>
      {props.children}
    </SearchVariablesContext.Provider>
  )
}

export const useSearchVariables = (): TSearchVariablesContext =>
  useContext(SearchVariablesContext)
