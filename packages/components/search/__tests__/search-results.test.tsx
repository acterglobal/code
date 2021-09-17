import React from 'react'

import { useRouter } from 'next/router'

import { useReactiveVar } from '@apollo/client'

import { Search } from '@acter/components/search'
import { useActerSearch } from '@acter/lib/search/use-acter-search'
import { render, screen } from '@acter/lib/test-utils'
import { ExampleActer } from '@acter/schema/fixtures'

jest.mock('next/router')
jest.mock('@apollo/client')
jest.mock('@acter/lib/search/use-acter-search')
jest.mock('@acter/lib/search/search-var')

describe('Display search results', () => {
  const mockUseRouter = useRouter as jest.Mock
  const mockUseActerSearch = useActerSearch as jest.Mock
  const mockUseReactiveVar = useReactiveVar as jest.Mock

  const defaultMockuseActerSearch = {
    loadMore: () => null,
    hasMore: true,
  }

  beforeEach(() => {
    mockUseRouter.mockReturnValue({
      pathname: '/search',
    })
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

    render(<Search interestTypes={[]} />)

    const results = screen.getByLabelText('search-results').textContent
    expect(results).toBe('4 Results')
  })

  it('should display zero results', async () => {
    mockUseActerSearch.mockReturnValue({
      ...defaultMockuseActerSearch,
      acters: [],
    })

    render(<Search interestTypes={[]} />)

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
    render(<Search interestTypes={[]} />)

    const results = screen.getByLabelText('search-results').textContent
    expect(results).toBe(`${acters.length} Result`)
  })
})
