import { useState } from 'react'

import {
  useQuery,
  QueryResult,
  OperationVariables,
  DocumentNode,
  TypedDocumentNode,
  QueryHookOptions,
  ApolloQueryResult,
} from '@apollo/client'

interface UsePaginationQueryOptions<TData, TVariables>
  extends QueryHookOptions<TData, TVariables> {
  pageSize?: number
  pagination?: Pagination
}

interface RefetchQuery<TVariables> {
  variables?: TVariables
  resetPagination?: boolean
}

export interface Pagination {
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  cursor?: Record<'id', any>
  skip: number
  take: number
}

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface UsePaginatedResults<TType = any, TData = any, TVariables = any>
  extends Omit<QueryResult<TData, TVariables>, 'refetch'> {
  results: TType[]
  loading: boolean
  hasMore: boolean
  pagination: Pagination
  refetch: (
    options?: RefetchQuery<TVariables>
  ) => Promise<ApolloQueryResult<TData>>
}

export const usePaginatedQuery = <
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  TType = any,
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  TData = any,
  TVariables = OperationVariables
>(
  /**
   * The GraphQL query
   */
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  /**
   * Key used for fetching results out of data
   */
  resultKey: string,
  /**
   * Standard useQuery options from Apollo
   */
  options?: UsePaginationQueryOptions<TData, TVariables>
): UsePaginatedResults<TType, TData, TVariables> => {
  const { variables, pageSize = 10, onCompleted, ...restOptions } = options
  const [results, setResults] = useState<TType[]>([])
  const [hasMore, setHasMore] = useState(true)

  const paginationDefaults: Pagination = {
    skip: 0,
    take: pageSize,
    cursor: undefined,
    ...(options.pagination || {}),
  }
  const [pagination, setPagination] = useState<Pagination>(paginationDefaults)

  const { refetch, ...restQueryResult } = useQuery<TData, TVariables>(query, {
    ...restOptions,
    variables: {
      ...variables,
      ...pagination,
    },
    onCompleted: _getOnCompleted<TType, TData>({
      pagination,
      paginationDefaults,
      resultKey,
      results,
      onCompleted,
      setPagination,
      setHasMore,
      setResults,
    }),
  })

  const refetchWithReset = (refetchOptions: RefetchQuery<TVariables> = {}) => {
    const refetchVariables = refetchOptions.variables || variables
    if (refetchOptions?.resetPagination) {
      setPagination(paginationDefaults)
      setResults([])
      setHasMore(true)
      return refetch({
        ...refetchVariables,
        ...paginationDefaults,
      })
    }
    return refetch({ ...refetchVariables, ...pagination })
  }

  return {
    results,
    hasMore,
    refetch: refetchWithReset,
    pagination,
    ...restQueryResult,
  }
}

interface GetOnCompleted<TType, TData> {
  pagination: Pagination
  paginationDefaults: Pagination
  resultKey: string
  results: TType[]
  onCompleted?: (data: TData) => void
  setHasMore: (boolean) => void
  setPagination: (Pagination) => void
  setResults: (results: TType[]) => void
}

/**
 * Exported function for testing. Do not use.
 * @param param0 variables passed from main function
 */
export const _getOnCompleted = <TType, TData>({
  pagination,
  paginationDefaults,
  resultKey,
  results,
  onCompleted,
  setPagination,
  setHasMore,
  setResults,
}: GetOnCompleted<TType, TData>) => (data: TData): void => {
  if (data) {
    const resultSet = data[resultKey]
    if (resultSet && resultSet[resultSet.length - 1]?.id) {
      const cursor = { id: resultSet[resultSet.length - 1].id }
      setPagination({
        ...paginationDefaults,
        cursor,
        skip: 1,
      })
      setHasMore(resultSet.length >= results.length + pagination.take)
    }
    setResults(resultSet)
  }
  if (typeof onCompleted === 'function') onCompleted(data)
}
