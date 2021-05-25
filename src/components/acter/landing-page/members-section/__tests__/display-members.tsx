import React from 'react'
import { render, screen } from '@testing-library/react'
import { DisplayMembers } from 'src/components/acter/landing-page/members-section/display-members'
import {
  ExampleActer,
  ExampleActerConnection,
  ExampleUser,
} from 'src/__fixtures__'
import { ORGANISATIONS } from 'src/constants'

describe('<DisplayMembers>', () => {
  it('should display when there are no acters', () => {
    render(
      <DisplayMembers
        acter={ExampleActer}
        user={ExampleUser}
        followers={[]}
        type={ORGANISATIONS}
      />
    )
    expect(
      screen.getByRole('heading', { name: '0 organisations' })
    ).toBeTruthy()
    expect(screen.queryByRole('listitm')).toBeFalsy()
  })

  it('should display a list of members', async () => {
    const connections = [
      {
        ...ExampleActerConnection,
        Follower: { ...ExampleActer, name: 'org1' },
      },
      {
        ...ExampleActerConnection,
        Follower: {
          ...ExampleActer,
          id: '9a64149c-5641-4841-96b1-1b2ec85f88ab',
          name: 'org2',
        },
      },
      {
        ...ExampleActerConnection,
        Follower: {
          ...ExampleActer,
          id: '9a64149c-5641-4841-96b1-1b2ec85f88ac',
          name: 'org3',
        },
      },
    ]

    render(
      <DisplayMembers
        acter={ExampleActer}
        user={ExampleUser}
        followers={connections}
        type={ORGANISATIONS}
      />
    )
    expect(
      screen.getByRole('heading', { name: '3 organisations' })
    ).toBeTruthy()
    const rows = await screen.findAllByRole('listitem')
    expect(rows).toHaveLength(3)
    expect(rows[0].textContent).toEqual('org1organisation')
  })
})
