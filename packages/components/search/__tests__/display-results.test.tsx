import React from 'react'

import mockRouter from 'next-router-mock'

import { DisplayResults } from '@acter/components/search/display-results'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActerSearch } from '@acter/lib/search/use-acter-search'
import { render, screen, within } from '@acter/lib/test-utils'
import { ExampleActerList, ExampleActivity } from '@acter/schema/fixtures'

jest.mock('next/dist/client/router', () => require('next-router-mock'))
jest.mock('@acter/lib/search/use-acter-search')

describe('Display search results', () => {
  const mockuseActerSearch = useActerSearch as jest.Mock

  it('should display search results with a list of Acters', async () => {
    mockRouter.setCurrentUrl('/search')
    mockuseActerSearch.mockReturnValue({ acters: ExampleActerList })

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
    mockRouter.setCurrentUrl('/search/activities')
    const activities = ExampleActerList.map((acter) => ({
      ...acter,
      Activity: ExampleActivity,
    }))
    mockuseActerSearch.mockReturnValue({ acters: activities })

    render(<DisplayResults />)
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
    mockuseActerSearch.mockReturnValue({ acters: [] })

    render(<DisplayResults />)
    const items = screen.queryAllByRole('listitem')
    const message = screen.queryByLabelText('zero-acters').textContent

    expect(items.length).toBe(0)

    expect(message).toBe(
      'Your search did not return any results. Try removing search terms and/or filters to see more.'
    )
  })
})
