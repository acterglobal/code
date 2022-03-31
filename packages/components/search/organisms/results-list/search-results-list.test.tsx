/**
 * @jest-environment jsdom
 */
import React from 'react'

import { useRouter } from 'next/router'

import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { SearchType } from '@acter/lib/constants'
import { useSearchType } from '@acter/lib/search/use-search-type'
import { render, screen, within } from '@acter/lib/test-utils'
import { useUser } from '@acter/lib/user/use-user'
import {
  ExampleActerList,
  ExampleActivity,
  ExampleUser,
} from '@acter/schema/fixtures'

import { SearchResultsList } from './search-results-list'

jest.mock('next/router')
jest.mock('@acter/lib/search/use-search-type')
jest.mock('@acter/lib/user/use-user')

describe('Display search results', () => {
  const mockUseRouter = useRouter as jest.Mock
  const mockUseSearchType = useSearchType as jest.Mock
  const mockUseUser = useUser as jest.Mock

  beforeAll(() => {
    mockUseUser.mockReturnValue({
      user: ExampleUser,
    })
  })

  it('should display search results with a list of Acters', async () => {
    mockUseSearchType.mockReturnValue(SearchType.ACTERS)

    render(<SearchResultsList acters={ExampleActerList} />)
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

    render(<SearchResultsList acters={activities} />)
    const items = screen.queryAllByRole('listitem')

    expect(items.length).toBe(9)

    items.map((item) => {
      expect(item.textContent).toContain('Activitytypes.event')
    })
  })
})
