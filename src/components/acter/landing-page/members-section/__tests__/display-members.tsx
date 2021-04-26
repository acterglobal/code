import React from 'react'
import { render, screen } from '@testing-library/react'

import { DisplayMembers } from 'src/components/acter/landing-page/members-section/display-members'

import { ExampleActer } from 'src/__fixtures__'

describe('<DisplayMembers>', () => {
  it('should display when there are no acters', () => {
    render(<DisplayMembers acters={[]} type="foo" />)
    expect(screen.getByRole('heading', { name: '0 foos' })).toBeTruthy()
    expect(screen.queryByRole('listitm')).toBeFalsy()
  })

  it('should display a list of members', async () => {
    const acters = [
      { ...ExampleActer, name: 'org1' },
      {
        ...ExampleActer,
        id: '9a64149c-5641-4841-96b1-1b2ec85f88ab',
        name: 'org2',
      },
      {
        ...ExampleActer,
        id: '9a64149c-5641-4841-96b1-1b2ec85f88ac',
        name: 'org3',
      },
    ]

    render(<DisplayMembers acters={acters} type="foos" />)
    expect(screen.getByRole('heading', { name: '3 foos' })).toBeTruthy()
    const rows = await screen.findAllByRole('listitem')
    expect(rows).toHaveLength(3)
    expect(rows[0].textContent).toEqual('org1organisation')
  })
})
