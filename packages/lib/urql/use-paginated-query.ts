/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from 'react'

import { DocumentNode } from 'graphql/language/ast'
import { useQuery, TypedDocumentNode, UseQueryArgs, UseQueryState } from 'urql'

import { getObjectArrayMemoString } from '@acter/lib/object/get-object-array-memo-string'

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

export interface UsePaginationQueryOptions<TData, TVariables>
  extends UseQueryArgs<TVariables, TData> {
  /**
   * The GraphQL query
   */
  query: DocumentNode | TypedDocumentNode<TData, TVariables>
  /**
   * Key used for fetching results out of data
   */
  dataKey: string
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
    dataKey,
    variables,
    pageSize = 20,
    pagination: paginationParams,
  } = options
  const [results, setResults] = useState<TType[]>([])
  const [hasMore, setHasMore] = useState(true)

  const paginationDefaults: Pagination = {
    skip: 0,
    take: pageSize,
    cursor: undefined,
    ...paginationParams,
  }
  const [pagination, setPagination] = useState<Pagination>(paginationDefaults)
  const [currentVariables, setCurrentVariables] =
    useState<TVariables>(variables)
  const [fetching, setFetching] = useState(false)
  const variablesMemo = useMemo(() => JSON.stringify(variables), [variables])
  const paginationMemo = useMemo(() => JSON.stringify(pagination), [pagination])
  const [dataMemo, setDataMemo] = useState('')

  // If we've changed the variables, the search results are no longer valid.
  useEffect(() => {
    setPagination(paginationDefaults)
    setResults([])
    setCurrentVariables(variables)
  }, [variablesMemo])

  useEffect(() => setFetching(true), [variablesMemo, paginationMemo])

  const [{ data, fetching: dataFetching, ...restQueryResult }, refetch] =
    useQuery<TData, VariablesWithPagination<TVariables>>({
      ...options,
      query,
      variables: {
        ...currentVariables,
        ...{ ...pagination, take: pagination.take + 1 },
      },
    })

  useEffect(() => {
    if (dataFetching) setFetching(true)
  }, [dataFetching])

  // This ensures we only set results when we have a new result set for a given set of search variables
  useEffect(
    () =>
      setDataMemo(
        `${variablesMemo}${getObjectArrayMemoString(data?.[dataKey])}`
      ),
    [data?.[dataKey]]
  )

  useEffect(() => {
    setResults(
      _getResults({
        data,
        pagination,
        dataKey: dataKey,
        results,
        setHasMore,
      })
    )
    setFetching(false)
  }, [dataMemo])

  const loadMore = _getLoadMore({
    data,
    dataKey: dataKey,
    hasMore,
    pagination,
    setPagination,
  })

  return [
    {
      ...restQueryResult,
      data,
      results,
      fetching,
      hasMore,
      pagination,
      loadMore,
    },
    refetch,
  ]
}

interface GetResultsProps<TType, TData> {
  data: TData
  pagination: Pagination
  dataKey: string
  results: TType[]
  setHasMore: (boolean) => void
}

/**
 * Exported function for testing. Do not use.
 * @param param0 variables passed from main function
 */
export const _getResults = <TType, TData>({
  data,
  pagination,
  dataKey,
  results = [],
  setHasMore,
}: GetResultsProps<TType, TData>): TType[] => {
  if (data && data[dataKey]) {
    const nextResultsPage = data[dataKey]
    const nextHasMore = nextResultsPage.length > pagination.take
    setHasMore(nextHasMore)
    const sliceEnd = nextHasMore ? -1 : undefined
    return [...results, ...nextResultsPage.slice(0, sliceEnd)]
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
  dataKey: string
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
export const _getLoadMore =
  ({ data, dataKey, hasMore, pagination, setPagination }: GetLoadMoreProps) =>
  (): void => {
    if (data?.[dataKey] && hasMore) {
      setPagination({
        ...pagination,
        cursor: { id: data[dataKey][data[dataKey].length - 1].id },
      })
    }
  }
