/**
 * @jest-environment jsdom
 */
import React from 'react'

import { useRouter } from 'next/router'

import { SearchResultsInfiniteList } from '@acter/components/organisms/search/results-infinite-list'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'
import { SearchType } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useActerSearch } from '@acter/lib/search/use-acter-search'
import { useSearchType } from '@acter/lib/search/use-search-type'
import { render, screen, within } from '@acter/lib/test-utils'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'
import { useUser } from '@acter/lib/user/use-user'
import { ExampleActerList, ExampleActivity } from '@acter/schema/fixtures'

jest.mock('next/router')
jest.mock('@acter/lib/search/use-search-type')
jest.mock('@acter/lib/search/use-acter-search')
jest.mock('@acter/lib/url/use-auth-redirect')
jest.mock('@acter/lib/acter/use-acter')
jest.mock('@acter/lib/user/use-user')
jest.mock('@acter/lib/i18n/use-translation')

describe('Display search results', () => {
  const mockUseRouter = useRouter as jest.Mock
  const mockUseSearchType = useSearchType as jest.Mock
  const mockUseActerSearch = useActerSearch as jest.Mock
  const mockUseAuthDirect = useAuthRedirect as jest.Mock
  const mockUseActer = useActer as jest.Mock
  const mockUseUser = useUser as jest.Mock
  const mockUseTranslation = useTranslation as jest.Mock

  beforeEach(() => {
    jest.resetAllMocks()
    mockUseActerSearch.mockReturnValue({ acters: [] })
    mockUseTranslation.mockReturnValue({ t: (_) => '' })
  })

  it('should display search results with a list of Acters', async () => {
    mockUseSearchType.mockReturnValue(SearchType.ACTERS)
    mockUseActerSearch.mockReturnValue({ acters: ExampleActerList })

    render(<SearchResultsInfiniteList />)

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
    mockUseAuthDirect.mockReturnValue({})
    mockUseActer.mockReturnValue({})
    mockUseUser.mockReturnValue({})

    const activities = ExampleActerList.map((acter) => ({
      ...acter,
      Activity: ExampleActivity,
    }))

    mockUseActerSearch.mockReturnValue({ acters: activities })

    render(<SearchResultsInfiniteList />)
    const items = screen.queryAllByRole('listitem')

    expect(items.length).toBe(9)

    items.map((item, i) => {
      const links = within(item).queryAllByRole('link')
      const exampleActivity = activities[i]
      expect(links[0].getAttribute('href')).toMatch(
        acterAsUrl({ acter: exampleActivity })
      )
    })
  })

  it('should display a message with no search results', async () => {
    const zeroMessage =
      'Your search did not return any results. Try removing search terms and/or filters to see more.'
    mockUseTranslation.mockReturnValue({
      t: (text) => {
        if (text === 'zeroResults') return zeroMessage
      },
    })
    render(<SearchResultsInfiniteList />)
    const items = screen.queryAllByRole('listitem')
    const message = screen.queryByLabelText('zero-acters').textContent

    expect(items.length).toBe(0)

    expect(message).toBe(zeroMessage)
  })
})
