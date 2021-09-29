import React from 'react'

import mockRouter from 'next-router-mock'

import { useReactiveVar } from '@apollo/client'

import { Search } from '@acter/components/search'
import { useActerSearch } from '@acter/lib/search/use-acter-search'
import { render, screen } from '@acter/lib/test-utils'
import { ExampleActer } from '@acter/schema/fixtures'

jest.mock('next/dist/client/router', () => require('next-router-mock'))
jest.mock('@apollo/client')
jest.mock('@acter/lib/search/use-acter-search')
jest.mock('@acter/lib/search/search-var')

describe('Display search results', () => {
  const mockUseActerSearch = useActerSearch as jest.Mock
  const mockUseReactiveVar = useReactiveVar as jest.Mock

  const defaultMockuseActerSearch = {
    loadMore: () => null,
    hasMore: true,
  }

  beforeEach(() => {
    mockRouter.setCurrentUrl('/search')
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
