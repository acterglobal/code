import React from 'react'

import { useReactiveVar } from '@apollo/client'

import { Search } from '@acter/components/search'
import { SearchType } from '@acter/lib/constants'
import { useActerSearch } from '@acter/lib/search/use-acter-search'
import { useSearchType } from '@acter/lib/search/use-search-type'
import { render, screen } from '@acter/lib/test-utils'
import { ExampleActer } from '@acter/schema/fixtures'

jest.mock('@apollo/client')
jest.mock('@acter/lib/search/use-acter-search')
jest.mock('@acter/lib/search/use-search-type')
jest.mock('@acter/lib/search/search-var')

describe('Display search results', () => {
  const mockUseActerSearch = useActerSearch as jest.Mock
  const mockUseReactiveVar = useReactiveVar as jest.Mock
  const mockUseSearchType = useSearchType as jest.Mock

  const defaultMockuseActerSearch = {
    loadMore: () => null,
    hasMore: true,
  }

  beforeEach(() => {
    mockUseSearchType.mockReturnValue(SearchType.ACTERS)
    mockUseReactiveVar.mockReturnValue({
      orderBy: 'NAME',
    })
  })

  it('should display number of results', async () => {
    const acters = [...Array(4)].map(() => ExampleActer)
    const mockuseActerSearch = useActerSearch as jest.Mock
    mockuseActerSearch.mockReturnValue({
      ...defaultMockuseActerSearch,
      acters,
    })

    render(<Search />)

    const results = screen.getByLabelText('search-results').textContent
    expect(results).toBe('4 Results')
  })

  it('should display zero results', async () => {
    mockUseActerSearch.mockReturnValue({
      ...defaultMockuseActerSearch,
      acters: [],
    })

    render(<Search />)

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
    render(<Search />)

    const results = screen.getByLabelText('search-results').textContent
    expect(results).toBe(`${acters.length} Result`)
  })
})
