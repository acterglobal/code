/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useReducer } from 'react'

import { useQuery } from 'urql'

import { getPaginatedResultsReducer } from './paginated-results-reducer'
import {
  WithId,
  UsePaginationQueryOptions,
  UsePaginatedResponse,
  PaginatedResultsActionKind,
  VariablesWithPagination,
} from './types'

export const usePaginatedQuery = <TType extends WithId, TData, TVariables>(
  options: UsePaginationQueryOptions<TType, TData, TVariables>
): UsePaginatedResponse<TType, TData, TVariables> => {
  const { query, dataKey, variables, pageSize = 10, resultsMergeFn } = options

  const [paginatedResultsReducer, { defaultState }] =
    getPaginatedResultsReducer<TType, TData, TVariables>({
      pageSize,
      resultsMergeFn,
    })
  const [state, dispatch] = useReducer(paginatedResultsReducer, defaultState)

  useEffect(() => {
    dispatch({ type: PaginatedResultsActionKind.NEW_SEARCH })
  }, [JSON.stringify(variables)])

  const [{ data, fetching: dataFetching, ...restQueryResult }, refetch] =
    useQuery<TData, VariablesWithPagination<TVariables>>(
      //@ts-ignore
      {
      ...options,
      query,
      variables: {
        ...variables,
        ...{ ...state.pagination, take: state.pagination.take + 1 },
      },
    })

  // Let reducer know when we're fetching, but let the reducer decide when we're done
  useEffect(() => {
    if (dataFetching) dispatch({ type: PaginatedResultsActionKind.FETCHING })
  }, [dataFetching])

  // Let reducer know there are new results
  useEffect(() => {
    if (data?.[dataKey]) {
      dispatch({
        type: PaginatedResultsActionKind.NEW_RESULTS,
        payload: { results: data[dataKey] },
      })
    }
  }, [data?.[dataKey]])

  const { results, ...restState } = state

  return [
    {
      ...restQueryResult,
      ...restState,
      results,
      loadMore: () => {
        dispatch({ type: PaginatedResultsActionKind.LOAD_MORE })
      },
    },
    refetch,
  ]
}
