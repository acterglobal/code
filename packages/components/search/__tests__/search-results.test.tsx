import React from 'react'

import { useRouter } from 'next/router'

import { Search } from '@acter/components/search'
import { useActerSearch } from '@acter/lib/acter/use-acter-search'
import { SearchType } from '@acter/lib/constants'
import { render, screen } from '@acter/lib/test-utils'
import { ExampleActer } from '@acter/schema/fixtures'

jest.mock('next/router')
jest.mock('@acter/lib/acter/use-acter-search')

describe('Display search results', () => {
  const mockUseRouter = useRouter as jest.Mock
  const mockuseActerSearch = useActerSearch as jest.Mock
  const defaultMockuseActerSearch = {
    loadMore: () => null,
    hasMore: true,
  }

  beforeEach(() => {
    mockUseRouter.mockReturnValue({
      query: {
        types: ['foo', 'bar'],
      },
    })
  })

  it('should display number of results', async () => {
    const acters = [...Array(4)].map(() => ExampleActer)
    const mockuseActerSearch = useActerSearch as jest.Mock
    mockuseActerSearch.mockReturnValue({
      ...defaultMockuseActerSearch,
      acters,
    })

    render(<Search searchType={SearchType.ACTERS} interestTypes={[]} />)

    const results = screen.getByLabelText('search-results').textContent
    expect(results).toBe('4 Results')
  })

  it('should display zero results', async () => {
    mockuseActerSearch.mockReturnValue({
      ...defaultMockuseActerSearch,
      acters: [],
    })

    render(<Search searchType={SearchType.ACTERS} interestTypes={[]} />)

    const results = screen.getByLabelText('search-results').textContent
    expect(results).toBe('0 Results')
  })

  it('should display one result', async () => {
    const acters = [ExampleActer]
    const mockuseActerSearch = useActerSearch as jest.Mock
    mockuseActerSearch.mockReturnValue({
      ...defaultMockuseActerSearch,
      acters,
    })
    render(<Search searchType={SearchType.ACTERS} interestTypes={[]} />)

    const results = screen.getByLabelText('search-results').textContent
    expect(results).toBe(`${acters.length} Result`)
  })
})
