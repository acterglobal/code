import { getFollowersByType } from '@acter/lib/acter/get-followers-by-type'
import { MemberType } from '@acter/lib/constants'
import {
  ExampleActer,
  ExampleUserActer,
  ExampleActerConnection,
  UserActerType,
  OrganisationActerType,
  NetworkActerType,
} from '@acter/lib/fixtures'

const { PEOPLE, ACTERS } = MemberType

describe('getFollowersByType', () => {
  it('should return a group of acters without users by type', () => {
    const acter = {
      ...ExampleActer,
      Followers: [
        // 2 Organisations
        {
          ...ExampleActerConnection,
          Follower: {
            ...ExampleActer,
            name: 'organisation1',
            ActerType: OrganisationActerType,
          },
        },
        {
          ...ExampleActerConnection,
          Follower: {
            ...ExampleActer,
            name: 'organisation2',
            ActerType: OrganisationActerType,
          },
        },
        // 1 Network
        {
          ...ExampleActerConnection,
          Follower: {
            ...ExampleActer,
            name: 'network1',
            ActerType: NetworkActerType,
          },
        },
      ],
    }

    const grouped = getFollowersByType(acter, ACTERS)
    expect(grouped).toHaveLength(3)
  })

  it('should return a group of user type acters', () => {
    const acter = {
      ...ExampleActer,
      Followers: [
        // People
        {
          ...ExampleActerConnection,
          Follower: {
            ...ExampleUserActer,
            name: 'user1',
            ActerType: UserActerType,
          },
        },
        {
          ...ExampleActerConnection,
          Follower: {
            ...ExampleUserActer,
            name: 'user2',
            ActerType: UserActerType,
          },
        },
      ],
    }

    const grouped = getFollowersByType(acter, PEOPLE)
    expect(grouped).toHaveLength(2)
  })
})
