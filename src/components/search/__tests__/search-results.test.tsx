import React from 'react'
import { render, screen } from '@testing-library/react'
import { Search } from 'src/components/search'
import { ACTERS } from 'src/constants'
import { ExampleActer } from 'src/__fixtures__'
// import Router from 'next/router'

// jest.mock('next/router', ()=> ({query: {searchType:'acters'}}))

describe('Display search results', () => {
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
