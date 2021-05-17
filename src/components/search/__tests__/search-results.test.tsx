import React from 'react'
import { render, screen } from '@testing-library/react'
import { Search } from 'src/components/search'
import { ACTERS } from 'src/constants'
import { ExampleActer } from 'src/__fixtures__'
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
    const acters = [...Array(4).keys()].map(() => ExampleActer)

    render(<Search searchType={ACTERS} acters={acters} interestTypes={[]} />)

    const results = screen.getByLabelText('search-results').textContent
    expect(results).toBe(`${acters.length} Results`)
  })

  it('should display zero results', async () => {
    const acters = []

    render(<Search searchType={ACTERS} acters={acters} interestTypes={[]} />)

    const results = screen.getByLabelText('search-results').textContent
    expect(results).toBe(`${acters.length} Results`)
  })

  it('should display one result', async () => {
    const acters = [ExampleActer]
    render(<Search searchType={ACTERS} acters={acters} interestTypes={[]} />)

    const results = screen.getByLabelText('search-results').textContent
    expect(results).toBe(`${acters.length} Result`)
  })
})
