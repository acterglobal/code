/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reducer } from 'react'

import { DocumentNode } from 'graphql/language/ast'
import { OrderedMap } from 'immutable'
import { UseQueryState, TypedDocumentNode, UseQueryArgs } from 'urql'

export interface Pagination {
  cursor?: Record<'id', any>
  skip: number
  take: number
}

export type StateResultsType<TType = unknown> = OrderedMap<
  string | number,
  TType
>
export interface PaginatedResultsState<TType, TData, TVariables>
  extends UseQueryState<TData, TVariables> {
  results: StateResultsType<TType>
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

export type ResultsMergeFn<TType = unknown> = (
  state: StateResultsType<TType>,
  results: TType
) => StateResultsType<TType>

export interface GetPaginatedResultsReducerProps<TType = unknown> {
  pageSize?: number
  resultsMergeFn?: ResultsMergeFn<TType>
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
  results: StateResultsType<TType>
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
export interface UsePaginationQueryOptions<TType, TData, TVariables>
  //@ts-ignore
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
  /**
   * Merge function to use for new results
   */
  resultsMergeFn?: ResultsMergeFn<TType>
}

export type WithId = {
  id: string | number
}
