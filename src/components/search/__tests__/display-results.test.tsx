import React from 'react'
import { render, screen, within } from '@testing-library/react'
import {
  ExampleActerList,
  ExampleActivity,
  ExampleActivityActer,
} from 'src/__fixtures__'
import { DisplayResults } from 'src/components/search/display-results'
import { ACTERS, ACTIVITIES } from 'src/constants'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'

describe('Display search results', () => {
  it('should display search results with a list of Acters', async () => {
    render(<DisplayResults dataType={ACTERS} acters={ExampleActerList} />)
    const items = screen.queryAllByRole('listitem')

    expect(items.length).toBe(9)

    items.map((item, i) => {
      const links = within(item).queryAllByRole('link')
      const exampleActer = ExampleActerList[i]
      expect(links[0].getAttribute('href')).toMatch(acterAsUrl(exampleActer))
    })
  })

  it('should display search results with a list of Activities', async () => {
    const acter = { ...ExampleActivityActer, Activity: ExampleActivity }
    const activities = [...Array(8).keys()].map(() => acter)

    render(<DisplayResults dataType={ACTIVITIES} acters={activities} />)
    const items = screen.queryAllByRole('listitem')

    expect(items.length).toBe(8)

    items.map((item, i) => {
      const links = within(item).queryAllByRole('link')
      const exampleActer = activities[i]
      expect(links[0].getAttribute('href')).toMatch(acterAsUrl(exampleActer))

      const type = within(item).queryByLabelText('activity-type')
      expect(type.textContent).toContain('event')
    })
  })

  it('should display a message with no search results', async () => {
    const acters = []

    render(<DisplayResults dataType={ACTERS} acters={acters} />)
    const items = screen.queryAllByRole('listitem')
    const message = screen.queryByLabelText('zero-acters').textContent

    expect(items.length).toBe(0)

    expect(message).toBe(
      'Your search did not return any results. Try removing search terms and/or filters to see more.'
    )
  })
})
