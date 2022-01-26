import React from 'react'

import { useRouter } from 'next/router'

import { DisplayResults } from '@acter/components/search/display-results'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'
import { useDeleteActer } from '@acter/lib/acter/use-delete-acter'
import { useUpdateActivity } from '@acter/lib/activity/use-update-activity'
import { SearchType } from '@acter/lib/constants'
import { getImageUrl } from '@acter/lib/images/get-image-url'
import { useActerSearch } from '@acter/lib/search/use-acter-search'
import { useSearchType } from '@acter/lib/search/use-search-type'
import { render, screen, within } from '@acter/lib/test-utils'
import {
  ExampleActer,
  ExampleActerList,
  ExampleActivity,
} from '@acter/schema/fixtures'

jest.mock('next/router')
jest.mock('@acter/lib/search/use-acter-search')
jest.mock('@acter/lib/search/use-search-type')
jest.mock('@acter/lib/acter/use-acter')
jest.mock('@acter/lib/activity/use-update-activity')
jest.mock('@acter/lib/acter/use-delete-acter')
jest.mock('@acter/lib/images/get-image-url')

describe('Display search results', () => {
  const mockUseRouter = useRouter as jest.Mock
  const mockUseActerSearch = useActerSearch as jest.Mock
  const mockUseSearchType = useSearchType as jest.Mock
  const mockUseActer = useActer as jest.Mock
  const mockUseUpdateActivity = useUpdateActivity as jest.Mock
  const mockUseDeleteActivity = useDeleteActer as jest.Mock
  const mockGetImageUrl = getImageUrl as jest.Mock

  it('should display search results with a list of Acters', async () => {
    mockUseSearchType.mockReturnValue(SearchType.ACTERS)
    mockUseActerSearch.mockReturnValue({ acters: ExampleActerList })
    mockUseActerSearch.mockReturnValue({ acters: ExampleActerList })
    mockGetImageUrl.mockReturnValue(
      'https://acter-dev.imgix.net/acter/95300d51e738ec0c16846561d6e10a27/d60c35e5bd3716efa64c892cffb628bf.png'
    )

    render(<DisplayResults />)
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
    mockUseActer.mockReturnValue({
      ...ExampleActer,
      Activity: ExampleActivity,
    })

    const activities = ExampleActerList.map((acter) => ({
      ...acter,
      Activity: ExampleActivity,
    }))
    mockUseActerSearch.mockReturnValue({ acters: activities })
    mockUseUpdateActivity.mockReturnValue([() => null])
    mockUseDeleteActivity.mockReturnValue([() => null])

    render(<DisplayResults />)
    const items = screen.queryAllByRole('listitem')

    expect(items.length).toBe(9)

    items.map((item) => {
      const type = within(item).queryByLabelText('activity-type')
      expect(type.textContent).toContain('Event')
    })
  })

  it('should display a message with no search results', async () => {
    mockUseActerSearch.mockReturnValue({ acters: [] })

    render(<DisplayResults />)
    const items = screen.queryAllByRole('listitem')
    const message = screen.queryByLabelText('zero-acters').textContent

    expect(items.length).toBe(0)

    expect(message).toBe(
      'Your search did not return any results. Try removing search terms and/or filters to see more.'
    )
  })
})
