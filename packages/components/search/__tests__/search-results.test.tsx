import React from 'react'
import { render, screen } from '@acter/lib/test-utils'
import { Search } from '@acter/components/search'
import { SearchType } from '@acter/lib/constants'
import { ExampleActer } from '@acter/schema/fixtures'
import { useRouter } from 'next/router'
jest.mock('next/router')

describe('Display search results', () => {
  beforeAll(() => {
    const mockUseRouter = useRouter as jest.Mock
    mockUseRouter.mockReturnValue({
      query: {},
    })
  })

  it('should display number of results', async () => {
    const acters = [...Array(4)].map(() => ExampleActer)

    render(
      <Search
        searchType={SearchType.ACTERS}
        acters={acters}
        interestTypes={[]}
      />
    )

    const results = screen.getByLabelText('search-results').textContent
    expect(results).toBe(`${acters.length} Results`)
  })

  it('should display zero results', async () => {
    const acters = []

    render(
      <Search
        searchType={SearchType.ACTERS}
        acters={acters}
        interestTypes={[]}
      />
    )

    const results = screen.getByLabelText('search-results').textContent
    expect(results).toBe(`${acters.length} Results`)
  })

  it('should display one result', async () => {
    const acters = [ExampleActer]
    render(
      <Search
        searchType={SearchType.ACTERS}
        acters={acters}
        interestTypes={[]}
      />
    )

    const results = screen.getByLabelText('search-results').textContent
    expect(results).toBe(`${acters.length} Result`)
  })
})
