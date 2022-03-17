import {
  WithId,
  PaginatedResultsState,
  Pagination,
  PaginatedResultsActionKind,
  GetPaginatedResultsReducerProps,
  GetPaginatedResultsReducerResult,
  PaginatedResultsAction,
} from './types'

export const getPaginatedResultsReducer = <
  TType extends WithId,
  TData,
  TVariables
>(
  { pageSize }: GetPaginatedResultsReducerProps = {
    pageSize: 20,
  }
): GetPaginatedResultsReducerResult<TType, TData, TVariables> => {
  type ReducerState = PaginatedResultsState<TType, TData, TVariables>

  const defaultPagination: Pagination = {
    skip: 0,
    take: pageSize,
    cursor: undefined,
  }

  const defaultState: ReducerState = {
    results: [],
    hasMore: false,
    fetching: false,
    pagination: defaultPagination,
    stale: false,
  }

  return [
    (
      state: ReducerState,
      action: PaginatedResultsAction<TType>
    ): ReducerState => {
      switch (action.type) {
        case PaginatedResultsActionKind.NEW_SEARCH:
          return defaultState
        case PaginatedResultsActionKind.FETCHING:
          return {
            ...state,
            fetching: true,
          }
        case PaginatedResultsActionKind.NEW_RESULTS: {
          const {
            payload: { results },
          } = action
          if (results && results.length) {
            const hasMore = results.length > state.pagination.take
            const sliceEnd = hasMore ? -1 : undefined
            const nextResultsPage = results.slice(0, sliceEnd)
            return {
              ...state,
              hasMore,
              fetching: false,
              results: [...state.results, ...nextResultsPage],
            }
          }
          return {
            ...state,
            fetching: false,
            hasMore: false,
          }
        }
        case PaginatedResultsActionKind.LOAD_MORE: {
          if (state.results.length > 0) {
            return {
              ...state,
              pagination: {
                ...state.pagination,
                cursor: { id: state.results[state.results.length - 1].id },
                skip: 1,
              },
            }
          }
          return state
        }
      }
    },
    { defaultState },
  ]
}
