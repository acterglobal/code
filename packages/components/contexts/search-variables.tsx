import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react'

import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'
import { SearchTypes, useSearchTypes } from '@acter/lib/search/use-search-types'

export interface SearchVariables {
  searchText?: string
  interests?: string[]
  orderBy?: SearchActivitiesSortBy
  types?: SearchTypes[]
}

const searchVariableDefaults: SearchVariables = {
  orderBy: SearchActivitiesSortBy.NAME,
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
  const types = useSearchTypes()
  const [variables, setVariables] = useState<SearchVariables>(
    searchVariableDefaults
  )

  useEffect(() => {
    setVariables({
      ...searchVariableDefaults,
      types,
    })
  }, [JSON.stringify(types)])

  return (
    <SearchVariablesContext.Provider value={[variables, setVariables]}>
      {props.children}
    </SearchVariablesContext.Provider>
  )
}

export const useSearchVariables = (): TSearchVariablesContext =>
  useContext(SearchVariablesContext)
