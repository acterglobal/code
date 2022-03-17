/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reducer } from 'react'

import { DocumentNode } from 'graphql/language/ast'
import { UseQueryState, TypedDocumentNode, UseQueryArgs } from 'urql'

export interface Pagination {
  cursor?: Record<'id', any>
  skip: number
  take: number
}

export interface PaginatedResultsState<TType, TData, TVariables>
  extends UseQueryState<TData, TVariables> {
  results: TType[]
  fetching: boolean
  hasMore: boolean
  pagination: Pagination
}

export enum PaginatedResultsActionKind {
  NEW_SEARCH,
  FETCHING,
  NEW_RESULTS,
  LOAD_MORE,
}

export interface PaginatedResultsActionPayload<TType> {
  results: TType[]
}

export interface PaginatedResultsAction<TType> {
  type: PaginatedResultsActionKind
  payload?: PaginatedResultsActionPayload<TType>
}

export interface GetPaginatedResultsReducerProps {
  pageSize?: number
}

export type GetPaginatedResultsReducer<TType, TData, TVariables> = Reducer<
  PaginatedResultsState<TType, TData, TVariables>,
  PaginatedResultsAction<TType>
>

export type GetPaginatedResultsReducerResult<TType, TData, TVariables> = [
  GetPaginatedResultsReducer<TType, TData, TVariables>,
  {
    defaultState: PaginatedResultsState<TType, TData, TVariables>
  }
]

export interface RefetchQuery<TVariables> {
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

export type refetch<TVariables> = (options?: RefetchQuery<TVariables>) => void

export type UsePaginatedResponse<TType, TData, TVariables> = [
  UsePaginatedState<TType, TData, TVariables>,
  refetch<TVariables>
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

export type WithId = {
  id: string | number
}
