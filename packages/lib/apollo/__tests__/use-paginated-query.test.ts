import { useQuery } from '@apollo/client'
import { renderHook } from '@testing-library/react-hooks'

import { DocumentNode } from 'graphql/language/ast'

import {
  usePaginatedQuery,
  _getResults,
  _getLoadMore,
  Pagination,
  GetLoadMoreProps,
} from '@acter/lib/apollo/use-paginated-query'

jest.mock('@apollo/client')

describe('usePaginatedQuery', () => {
  const useQueryMock = useQuery as jest.Mock
  const setPagination = jest.fn()
  const setHasMore = jest.fn()
  const setResults = jest.fn()

  const paginationDefaults: Pagination = {
    cursor: undefined,
    skip: 0,
    take: 10,
  }
  const pagination = paginationDefaults
  const resultKey = 'foo'
  const data = {
    foo: [...Array(11)].map((_, id) => ({ id })),
  }

  beforeEach(() => {
    //eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;[setPagination, setHasMore, setResults].forEach((fn) => fn.mockReset())
  })

  it('should send the first request with no cursor', () => {
    useQueryMock.mockImplementation((_query, { variables }) => {
      expect(variables).toEqual({
        skip: 0,
        take: 10,
        cursor: null,
      })
    })

    renderHook(() =>
      usePaginatedQuery({
        query: (`` as unknown) as DocumentNode,
        resultKey: '',
        variables: {},
      })
    )
  })

  describe('onComplete', () => {
    const results = []
    const getResultsParams = {
      pagination,
      resultKey,
      results,
      setHasMore,
      setResults,
    }

    it('should skip pagination if there are no results', () => {
      _getResults(getResultsParams)({})
      expect(setPagination).not.toHaveBeenCalled()
      expect(setHasMore).not.toHaveBeenCalled()
    })

    it('should set hasMore when there appear to be more results', () => {
      _getResults(getResultsParams)(data)
      expect(setHasMore).toHaveBeenCalledTimes(1)
      expect(setHasMore).toHaveBeenCalledWith(true)
    })

    it('should set results', () => {
      _getResults(getResultsParams)(data)
      expect(setResults).toHaveBeenCalledTimes(1)
    })
  })

  describe('_getLoadMore', () => {
    const getLoadMoreParams: GetLoadMoreProps = {
      data,
      resultKey,
      hasMore: true,
      pagination,
      setPagination,
    }

    it('should set the cursor to the id of the last result and skip 1 in pagination', () => {
      _getLoadMore(getLoadMoreParams)()
      expect(setPagination).toHaveBeenCalledTimes(1)
      expect(setPagination).toHaveBeenCalledWith({
        cursor: { id: 10 },
        skip: 0,
        take: 10,
      })
    })
  })
})
