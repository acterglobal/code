import { useQuery } from '@apollo/client'
import { renderHook } from '@testing-library/react-hooks'

import {
  usePaginatedQuery,
  _getOnCompleted,
  Pagination,
  UsePaginatedResults,
} from '@acter/lib/apollo/use-paginated-query'

jest.mock('@apollo/client')

describe('usePaginatedQuery', () => {
  const useQueryMock = useQuery as jest.Mock

  it('should send the first request with no cursor', () => {
    useQueryMock.mockImplementation((_query, { variables }) => {
      expect(variables).toEqual({
        skip: 0,
        take: 10,
        cursor: null,
      })
    })

    renderHook(() => usePaginatedQuery('', '', { variables: {} }))
  })

  describe('onComplete', () => {
    const paginationDefaults: Pagination = {
      cursor: undefined,
      skip: 0,
      take: 10,
    }
    const pagination = paginationDefaults
    const resultKey = 'foo'
    const results = []
    const setPagination = jest.fn()
    const setHasMore = jest.fn()
    const setResults = jest.fn()
    const getOnCompletedParams = {
      pagination,
      paginationDefaults,
      resultKey,
      results,
      setPagination,
      setHasMore,
      setResults,
    }
    const data = {
      foo: [...Array(10)].map((_, id) => ({ id })),
    }

    beforeEach(() => {
      //eslint-disable-next-line @typescript-eslint/no-extra-semi
      ;[setPagination, setHasMore, setResults].forEach((fn) => fn.mockReset())
    })

    it('should skip pagination if there are no results', () => {
      _getOnCompleted(getOnCompletedParams)({})
      expect(setPagination).not.toHaveBeenCalled()
      expect(setHasMore).not.toHaveBeenCalled()
      expect(setResults).not.toHaveBeenCalled()
    })

    it('should skip pagination if the results do not include an id', () => {
      _getOnCompleted(getOnCompletedParams)({ foo: [{ bar: 'blah' }] })
      expect(setPagination).not.toHaveBeenCalled()
      expect(setHasMore).not.toHaveBeenCalled()
      expect(setResults).not.toHaveBeenCalled()
    })

    it('should set the cursor to the id of the last result and skip 1 in pagination', () => {
      _getOnCompleted(getOnCompletedParams)(data)
      expect(setPagination).toHaveBeenCalledTimes(1)
      expect(setPagination).toHaveBeenCalledWith({
        cursor: { id: 9 },
        skip: 1,
        take: 10,
      })
    })

    it('should set hasMore when there appear to be more results', () => {
      _getOnCompleted(getOnCompletedParams)(data)
      expect(setHasMore).toHaveBeenCalledTimes(1)
      expect(setHasMore).toHaveBeenCalledWith(true)
    })

    it('should set results', () => {
      _getOnCompleted(getOnCompletedParams)(data)
      expect(setResults).toHaveBeenCalledTimes(1)
    })

    it('should call onCompleted from options if it exists', () => {
      const onCompleted = jest.fn()
      _getOnCompleted({ ...getOnCompletedParams, onCompleted })(data)

      expect(onCompleted).toHaveBeenCalledTimes(1)
    })
  })

  describe('refetch', () => {
    it('should refetch with the same pagination & variables by default', () => {
      const pagination = { cursor: { id: 'foo' }, skip: 1, take: 10 }
      const variables = { foo: 'bar' }

      useQueryMock.mockReturnValue({
        refetch: (refetchOptions) => {
          console.log(refetchOptions)
          expect(refetchOptions).toEqual({ ...variables, ...pagination })
        },
      })

      const {
        result: { current },
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
      } = renderHook<any, UsePaginatedResults>(() =>
        usePaginatedQuery('', '', { pagination, variables })
      )
      current.refetch()
    })

    it('should refetch with fresh pagination when requested', () => {
      const pagination = { cursor: { id: 'foo' }, skip: 1, take: 10 }
      const variables = { foo: 'bar' }

      useQueryMock.mockReturnValue({
        refetch: (refetchOptions) => {
          console.log(refetchOptions)
          expect(refetchOptions).toEqual({ ...variables, ...pagination })
        },
      })

      const {
        result: { current },
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
      } = renderHook<any, UsePaginatedResults>(() =>
        usePaginatedQuery('', '', { pagination, variables })
      )
      current.refetch({ resetPagination: true })
    })
  })
})
