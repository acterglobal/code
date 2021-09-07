import React from 'react'
import { render, screen, within } from '@acter/lib/test-utils'
import {
  ExampleActerList,
  ExampleActivity,
  Interests,
} from '@acter/schema/fixtures'
import { DisplayResults } from '@acter/components/search/display-results'
import { SearchType } from '@acter/lib/constants'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useFetchActers } from '@acter/lib/acter/use-fetch-acters'

jest.mock('@acter/lib/acter/use-fetch-acters')

describe('Display search results', () => {
  const mockUseFetchActers = useFetchActers as jest.Mock

  it('should display search results with a list of Acters', async () => {
    mockUseFetchActers.mockReturnValue({ acters: ExampleActerList })

    render(
      <DisplayResults
        searchType={SearchType.ACTERS}
        interestTypes={Interests.data.interestTypes}
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
    const activities = ExampleActerList.map((acter) => ({
      ...acter,
      Activity: ExampleActivity,
    }))
    mockUseFetchActers.mockReturnValue({ acters: activities })

    render(
      <DisplayResults
        searchType={SearchType.ACTIVITIES}
        interestTypes={Interests.data.interestTypes}
      />
    )
    const items = screen.queryAllByRole('listitem')

    expect(items.length).toBe(9)

    items.map((item, i) => {
      const links = within(item).queryAllByRole('link')
      const exampleActer = activities[i]
      expect(links[0].getAttribute('href')).toMatch(
        acterAsUrl({ acter: exampleActer })
      )

      const type = within(item).queryByLabelText('activity-type')
      expect(type.textContent).toContain('Event')
    })
  })

  it('should display a message with no search results', async () => {
    mockUseFetchActers.mockReturnValue({ acters: [] })

    render(
      <DisplayResults
        searchType={SearchType.ACTERS}
        interestTypes={Interests.data.interestTypes}
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
