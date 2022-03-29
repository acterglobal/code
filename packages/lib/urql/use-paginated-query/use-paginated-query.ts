/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useReducer, useRef } from 'react'

import { useQuery } from 'urql'

import { getObjectArrayMemoString } from '@acter/lib/object/get-object-array-memo-string'

import { getPaginatedResultsReducer } from './paginated-results-reducer'
import {
  WithId,
  UsePaginationQueryOptions,
  UsePaginatedResponse,
  PaginatedResultsActionKind,
  VariablesWithPagination,
} from './types'

export const usePaginatedQuery = <TType extends WithId, TData, TVariables>(
  options: UsePaginationQueryOptions<TData, TVariables>
): UsePaginatedResponse<TType, TData, TVariables> => {
  const { query, dataKey, variables, pageSize = 20 } = options
  const dataRef = useRef('')

  const [paginatedResultsReducer, { defaultState }] =
    getPaginatedResultsReducer<TType, TData, TVariables>({
      pageSize,
    })
  const [state, dispatch] = useReducer(paginatedResultsReducer, defaultState)

  useEffect(() => {
    dispatch({ type: PaginatedResultsActionKind.NEW_SEARCH })
    dataRef.current = undefined
  }, [variables])

  const [{ data, fetching: dataFetching, ...restQueryResult }, refetch] =
    useQuery<TData, VariablesWithPagination<TVariables>>({
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
    const newRef = getObjectArrayMemoString(data?.[dataKey])
    if (
      (!dataRef.current && data?.[dataKey]) ||
      (newRef && dataRef.current !== newRef)
    ) {
      dataRef.current = newRef
      dispatch({
        type: PaginatedResultsActionKind.NEW_RESULTS,
        payload: { results: data[dataKey] },
      })
    }
  }, [data?.[dataKey]])

  return [
    {
      ...restQueryResult,
      ...state,
      loadMore: () => {
        dispatch({ type: PaginatedResultsActionKind.LOAD_MORE })
      },
    },
    refetch,
  ]
}
