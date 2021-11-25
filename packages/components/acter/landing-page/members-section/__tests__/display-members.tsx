import React from 'react'

import { DisplayMembers } from '@acter/components/acter/landing-page/members-section/display-members'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUpdateActerConnection } from '@acter/lib/acter/use-update-connection'
import { render, screen } from '@acter/lib/test-utils'
import { useUser } from '@acter/lib/user/use-user'
import {
  ExampleActer,
  ExampleActerConnection,
  ExampleUser,
} from '@acter/schema/fixtures'

jest.mock('@acter/lib/acter/use-acter')
jest.mock('@acter/lib/acter/use-update-connection')
jest.mock('@acter/lib/user/use-user')

describe('<DisplayMembers>', () => {
  const mockUseActer = useActer as jest.Mock
  const mockUseUser = useUser as jest.Mock
  const useUpdateActerConnectionMock = useUpdateActerConnection as jest.Mock
  beforeEach(() => {
    mockUseActer.mockReturnValue({ acter: ExampleActer })
    mockUseUser.mockReturnValue({ user: ExampleUser })
    useUpdateActerConnectionMock.mockReturnValue([
      { fetching: false },
      () => void 0,
    ])
  })

  it('should display when there are no acters', () => {
    render(<DisplayMembers followers={[]} />)
    expect(screen.queryByRole('listitem')).toBeFalsy()
  })

  it('should display a list of members', async () => {
    const connections = [
      {
        ...ExampleActerConnection,
        Follower: { ...ExampleActer, name: 'org1', location: 'test location' },
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

    render(<DisplayMembers followers={connections} />)
    const rows = await screen.findAllByRole('listitem')
    expect(rows).toHaveLength(3)
    expect(rows[0].textContent).toEqual('org1test location')
  })
})
