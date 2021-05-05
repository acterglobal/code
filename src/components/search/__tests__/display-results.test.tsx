import React from 'react'
import { render, screen, within } from '@testing-library/react'
import {
  ExampleActerList,
  ExampleActivity,
  ExampleActivityActer,
} from 'src/__fixtures__'
import { DisplayResults } from 'src/components/search/display-results'
import { ACTERS, ACTIVITY, ACTIVITIES } from 'src/constants'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'

describe('Display search results', () => {
  it('should display search results with a list of Acters', async () => {
    render(<DisplayResults dataType={ACTERS} acters={ExampleActerList} />)
    const actersList = screen.queryAllByRole('acters')

    expect(actersList.length).toBe(9)

    actersList.map((acter, i) => {
      const links = within(acter).queryAllByRole('link')
      const exampleActer = ExampleActerList[i]
      expect(links[0].getAttribute('href')).toMatch(acterAsUrl(exampleActer))
    })
  })

  it('should display search results with a list of Activities', async () => {
    const acter = { ...ExampleActivityActer, Activity: ExampleActivity }
    const activities = [...Array(8).keys()].map(() => acter)

    render(<DisplayResults dataType={ACTIVITIES} acters={activities} />)
    const actersList = screen.queryAllByRole('acters')

    expect(actersList.length).toBe(8)

    actersList.map((acter, i) => {
      const links = within(acter).queryAllByRole('link')
      const exampleActer = activities[i]

      expect(links[0].getAttribute('href')).toMatch(acterAsUrl(exampleActer))

      expect(exampleActer.ActerType.name).toBe(ACTIVITY)
    })
  })

  it('should display a message with no search results', async () => {
    const acters = []

    render(<DisplayResults dataType={ACTERS} acters={acters} />)
    const actersList = screen.queryAllByRole('acters')
    const message = screen.queryByRole('zero-acters').textContent

    expect(actersList.length).toBe(0)

    expect(message).toBe(
      'Your search did not return any results. Try removing search terms and/or filters to see more.'
    )
  })
})
