/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'

import { DocumentNode } from 'graphql/language/ast'
import { useQuery, TypedDocumentNode, UseQueryArgs, UseQueryState } from 'urql'

interface RefetchQuery<TVariables> {
  variables?: TVariables
  resetPagination?: boolean
}

export interface Pagination {
  cursor?: Record<'id', any>
  skip: number
  take: number
}

export type VariablesWithPagination<TVariables> = TVariables & Pagination

export interface UsePaginatedState<TType = any, TData = any, TVariables = any>
  extends UseQueryState<TData, TVariables> {
  results: TType[]
  fetching: boolean
  hasMore: boolean
  pagination: Pagination
  loadMore: () => void
}

export type refetch<TVariables = any> = (
  options?: RefetchQuery<TVariables>
) => void

export type UsePaginatedResponse<TType = any, TData = any, TVariables = any> = [
  UsePaginatedState<TType, TData, TVariables>,
  refetch
]

interface UsePaginationQueryOptions<TData, TVariables>
  extends UseQueryArgs<TVariables, TData> {
  /**
   * The GraphQL query
   */
  query: DocumentNode | TypedDocumentNode<TData, TVariables>
  /**
   * Key used for fetching results out of data
   */
  resultKey: string
  /**
   * The variables used for the query
   */
  variables: TVariables
  /**
   * Number of items per page
   */
  pageSize?: number
  /**
   * Pagination options
   */
  pagination?: Pagination
}

export const usePaginatedQuery = <TType = any, TData = any, TVariables = any>(
  options: UsePaginationQueryOptions<TData, TVariables>
): UsePaginatedResponse<TType, TData, TVariables> => {
  const {
    query,
    resultKey,
    variables,
    pageSize = 10,
    pagination: paginationParams,
  } = options
  const [results, setResults] = useState<TType[]>([])
  const [hasMore, setHasMore] = useState(true)
  const initialSearch = useRef(true)

  const paginationDefaults: Pagination = {
    skip: 0,
    take: pageSize,
    cursor: undefined,
    ...paginationParams,
  }
  const [pagination, setPagination] = useState<Pagination>(paginationDefaults)

  const [{ data, ...restQueryResult }, refetch] = useQuery<
    TData,
    VariablesWithPagination<TVariables>
  >({
    ...options,
    query,
    variables: {
      ...variables,
      ...{ ...pagination, take: pagination.take + 1 },
    },
  })

  useEffect(() => {
    _getResults({ pagination, resultKey, results, setHasMore, setResults })(
      data
    )
  }, [data])

  // Reset the search if one of our variables have changed
  useEffect(() => {
    if (!initialSearch.current) {
      setPagination(paginationDefaults)
    }
    initialSearch.current = false
  }, [JSON.stringify(variables)])

  const loadMore = _getLoadMore({
    data,
    resultKey,
    hasMore,
    pagination,
    setPagination,
  })

  return [
    {
      ...restQueryResult,
      data,
      results,
      hasMore,
      pagination,
      loadMore,
    },
    refetch,
  ]
}

interface GetResultsProps<TType> {
  pagination: Pagination
  resultKey: string
  results: TType[]
  setHasMore: (boolean) => void
  setResults: (results: TType[]) => void
}

/**
 * Exported function for testing. Do not use.
 * @param param0 variables passed from main function
 */
export const _getResults = <TType, TData>({
  pagination,
  resultKey,
  results,
  setHasMore,
  setResults,
}: GetResultsProps<TType>) => (data: TData): void => {
  if (data && data[resultKey]) {
    const nextResults = data[resultKey]
    const nextHasMore = nextResults.length > results.length + pagination.take
    setHasMore(nextHasMore)
    const sliceEnd = nextHasMore ? -1 : undefined
    setResults([...nextResults.slice(0, sliceEnd)])
  }
}

export interface GetLoadMoreProps<TData = any> {
  /**
   * data from useQuery
   */
  data: TData
  /**
   * Key to find results in data
   */
  resultKey: string
  /**
   * Whether there are more results
   */
  hasMore: boolean
  /**
   * Current pagination
   */
  pagination: Pagination
  /**
   * setPagination useState function
   */
  setPagination: (Pagination) => void
}

/**
 * DO NOT USE. Exported function for testing.
 * @param GetLoadMoreProps
 * @returns void
 */
export const _getLoadMore = ({
  data,
  resultKey,
  hasMore,
  pagination,
  setPagination,
}: GetLoadMoreProps) => (): void =>
  hasMore &&
  setPagination({
    ...pagination,
    cursor: { id: data[resultKey][data[resultKey].length - 1].id },
  })
