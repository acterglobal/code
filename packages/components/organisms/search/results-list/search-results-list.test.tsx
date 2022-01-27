import React from 'react'

import { useRouter } from 'next/router'

import { SearchResultsList } from '@acter/components/organisms/search/results-list'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { SearchType } from '@acter/lib/constants'
import { useSearchType } from '@acter/lib/search/use-search-type'
import { render, screen, within } from '@acter/lib/test-utils'
import { ExampleActerList, ExampleActivity } from '@acter/schema/fixtures'

jest.mock('next/router')
jest.mock('@acter/lib/search/use-search-type')

describe('Display search results', () => {
  const mockUseRouter = useRouter as jest.Mock
  const mockUseSearchType = useSearchType as jest.Mock

  it('should display search results with a list of Acters', async () => {
    mockUseSearchType.mockReturnValue(SearchType.ACTERS)

    render(
      <SearchResultsList
        acters={ExampleActerList}
        fetching={false}
        hasMore={false}
        loadMore={jest.fn()}
      />
    )
    const items = screen.queryAllByRole('listitem')

    expect(items.length).toBe(9)

    items.map((item, i) => {
      const links = within(item).queryAllByRole('link')
      const exampleActer = ExampleActerList[i]
      expect(links[0].getAttribute('href')).toMatch(
        acterAsUrl({ acter: exampleActer })
      )
    })
  })

  it('should display search results with a list of Activities', async () => {
    mockUseSearchType.mockReturnValue(SearchType.ACTIVITIES)
    mockUseRouter.mockReturnValue({
      query: { slug: '' },
      asPath: '',
      pathname: '/search/activities',
    })

    const activities = ExampleActerList.map((acter) => ({
      ...acter,
      Activity: ExampleActivity,
    }))

    render(
      <SearchResultsList
        acters={activities}
        fetching={false}
        hasMore={false}
        loadMore={jest.fn()}
      />
    )
    const items = screen.queryAllByRole('listitem')

    expect(items.length).toBe(9)

    items.map((item) => {
      const type = within(item).queryByLabelText('activity-type')
      expect(type.textContent).toContain('Event')
    })
  })

  it('should display a message with no search results', async () => {
    render(
      <SearchResultsList
        acters={[]}
        fetching={false}
        hasMore={false}
        loadMore={jest.fn()}
      />
    )
    const items = screen.queryAllByRole('listitem')
    const message = screen.queryByLabelText('zero-acters').textContent

    expect(items.length).toBe(0)

    expect(message).toBe(
      'Your search did not return any results. Try removing search terms and/or filters to see more.'
    )
  })
})
