import React from 'react'
import { render, screen } from '@acter/lib/test-utils'
import { Search } from '@acter/components/search'
import { SearchType } from '@acter/lib/constants'
import { ExampleActer } from '@acter/schema/fixtures'
import { useActerSearch } from '@acter/lib/acter/use-fetch-acters'

jest.mock('@acter/lib/acter/use-fetch-acters')

describe('Display search results', () => {
  const mockuseActerSearch = useActerSearch as jest.Mock
  const defaultMockuseActerSearch = {
    loadMore: () => null,
    hasMore: true,
  }

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
