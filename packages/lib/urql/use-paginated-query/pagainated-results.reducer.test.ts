import { getPaginatedResultsReducer } from './paginated-results-reducer'
import {
  GetPaginatedResultsReducer,
  PaginatedResultsActionKind,
  PaginatedResultsState,
} from './types'

describe('paginatedResultsReducer', () => {
  describe('getter function', () => {
    it('should set defaults using passed page size', () => {
      const pageSize = 10
      const [_reducer, { defaultState }] = getPaginatedResultsReducer({
        pageSize,
      })

      expect(defaultState.pagination.take).toBe(pageSize)
    })

    it('should default pageSize', () => {
      const [_reducer, { defaultState }] = getPaginatedResultsReducer()

      expect(typeof defaultState.pagination.take).toBe('number')
    })
  })

  describe('reducer', () => {
    let reducer: GetPaginatedResultsReducer<any, any, any>
    let defaultState: PaginatedResultsState<any, any, any>

    beforeEach(() => {
      const result = getPaginatedResultsReducer()
      reducer = result[0]
      defaultState = result[1].defaultState
    })

    it('should reset results and pagination on new search', () => {
      const state = reducer(
        {
          ...defaultState,
          results: [{ id: 1 }, { id: 2 }],
          pagination: {
            ...defaultState.pagination,
            cursor: { id: 1 },
            skip: 1,
          },
        },
        { type: PaginatedResultsActionKind.NEW_SEARCH }
      )

      expect(state.results).toStrictEqual([])
      expect(state.pagination.cursor).toBe(undefined)
      expect(state.pagination.skip).toBe(0)
    })

    it('should set fetching', () => {
      const state = reducer(defaultState, {
        type: PaginatedResultsActionKind.FETCHING,
      })
      expect(state.fetching).toBe(true)
    })

    describe('new results', () => {
      describe('hasMore', () => {
        let hasMoreState: PaginatedResultsState<any, any, any>
        beforeEach(() => {
          hasMoreState = {
            ...defaultState,
            pagination: { ...defaultState.pagination, take: 2 },
          }
        })

        it('should set hasMore if there are more results than needed', () => {
          const state = reducer(hasMoreState, {
            type: PaginatedResultsActionKind.NEW_RESULTS,
            payload: {
              results: [{ id: 1 }, { id: 2 }, { id: 3 }],
            },
          })

          expect(state.hasMore).toBe(true)
        })

        it('should set hasMore false if there are not more than needed', () => {
          const state = reducer(hasMoreState, {
            type: PaginatedResultsActionKind.NEW_RESULTS,
            payload: {
              results: [{ id: 1 }, { id: 2 }],
            },
          })

          expect(state.hasMore).toBe(false)
        })
      })

      describe('results', () => {
        it('should set fetching and hasMore on no results', () => {
          const state = reducer(
            { ...defaultState, fetching: true, hasMore: true },
            {
              type: PaginatedResultsActionKind.NEW_RESULTS,
              payload: { results: [] },
            }
          )

          expect(state.fetching).toBe(false)
          expect(state.hasMore).toBe(false)
        })

        it('should only take enough results to fill pageSize', () => {
          const newResults = [{ id: 1 }, { id: 2 }]
          const state = reducer(
            {
              ...defaultState,
              pagination: { ...defaultState.pagination, take: 1 },
            },
            {
              type: PaginatedResultsActionKind.NEW_RESULTS,
              payload: { results: newResults },
            }
          )

          expect(state.results).toStrictEqual([{ id: 1 }])
        })

        it('should append new results', () => {
          const currentResults = [{ id: 1 }, { id: 2 }]
          const newResults = [{ id: 3 }, { id: 4 }]
          const state = reducer(
            { ...defaultState, results: currentResults },
            {
              type: PaginatedResultsActionKind.NEW_RESULTS,
              payload: { results: newResults },
            }
          )

          expect(state.results).toStrictEqual([
            ...currentResults,
            ...newResults,
          ])
        })
      })

      describe('loadMore', () => {
        it('should return if there are no results to load more from', () => {
          const state = reducer(
            { ...defaultState },
            {
              type: PaginatedResultsActionKind.LOAD_MORE,
            }
          )

          expect(state.pagination.cursor).toBe(undefined)
          expect(state.pagination.skip).toBe(0)
        })

        it('should set cursor and skip on pagination', () => {
          const currentResults = [{ id: 1 }, { id: 2 }]
          const state = reducer(
            { ...defaultState, results: currentResults },
            {
              type: PaginatedResultsActionKind.LOAD_MORE,
            }
          )

          expect(state.pagination.cursor).toStrictEqual({ id: 2 })
          expect(state.pagination.skip).toBe(1)
        })
      })
    })
  })
})
