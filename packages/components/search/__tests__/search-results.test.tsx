import React from 'react'
import { render, screen } from '@acter/lib/test-utils'
import { Search } from '@acter/components/search'
import { SearchType } from '@acter/lib/constants'
import { ExampleActer } from '@acter/schema/fixtures'
import { useFetchActers } from '@acter/lib/acter/use-fetch-acters'
import { useRouter } from 'next/router'
jest.mock('next/router')
jest.mock('@acter/lib/acter/use-fetch-acters')

describe('Display search results', () => {
  beforeAll(() => {
    const mockUseRouter = useRouter as jest.Mock
    mockUseRouter.mockReturnValue({
      query: {},
    })
  })

  it('should display number of results', async () => {
    const acters = [...Array(4)].map(() => ExampleActer)
    const mockUseFetchActers = useFetchActers as jest.Mock
    mockUseFetchActers.mockReturnValue([
      { acters },
      { loading: false, loadMore: () => null },
    ])

    render(<Search searchType={SearchType.ACTERS} interestTypes={[]} />)

    const results = screen.getByLabelText('search-results').textContent
    expect(results).toBe(`${acters.length} Results`)
  })

  it('should display zero results', async () => {
    const acters = []
    const mockUseFetchActers = useFetchActers as jest.Mock
    mockUseFetchActers.mockReturnValue([
      { acters },
      { loading: false, loadMore: () => null },
    ])

    render(<Search searchType={SearchType.ACTERS} interestTypes={[]} />)

    const results = screen.getByLabelText('search-results').textContent
    expect(results).toBe(`${acters.length} Results`)
  })

  it('should display one result', async () => {
    const acters = [ExampleActer]
    const mockUseFetchActers = useFetchActers as jest.Mock
    mockUseFetchActers.mockReturnValue([
      { acters },
      { loading: false, loadMore: () => null },
    ])
    render(<Search searchType={SearchType.ACTERS} interestTypes={[]} />)

    const results = screen.getByLabelText('search-results').textContent
    expect(results).toBe(`${acters.length} Result`)
  })
})
