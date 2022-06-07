import { getFollowers } from '@acter/lib/acter/get-followers'
import { Acter, ActerConnectionRole } from '@acter/schema'
import {
  ExampleActer,
  ExampleUser,
  ExampleUserActer,
  ExampleActerConnection,
} from '@acter/schema/fixtures'

describe('getFollowers', () => {
  it('should return an empty array if there is no Acter', () => {
    const user = {
      ...ExampleUser,
      Acter: null,
    }

    expect(getFollowers(user, ExampleActer)).toStrictEqual([])
  })

  it('should return an empty array if there are no Followers', () => {
    const user = {
      ...ExampleUser,
      Acter: {
        ...ExampleUserActer,
        Followers: null,
      },
    }

    expect(getFollowers(user, ExampleActer)).toStrictEqual([])
  })

  it('should create a combined list of acter followers & user connections that can connect', () => {
    const acter1: Acter = {
      ...ExampleActer,
      id: 'acter-100',
      Following: [
        {
          ...ExampleActerConnection,
          role: ActerConnectionRole.MEMBER,
          id: 'acter-connection-1',
          Following: {
            ...ExampleActer,
            id: 'acter-followed-100',
          },
        },
      ],
    }

    const userActer: Acter = {
      ...ExampleUserActer,
      id: 'user-acter-100',
      Following: [
        {
          ...ExampleActerConnection,
          role: ActerConnectionRole.MEMBER,
          id: 'user-connection-1',
          Following: {
            ...ExampleActer,
            name: 'acter1',
            id: 'acter-followed-100',
          },
        },
      ],
    }

    const user = {
      ...ExampleUser,
      Acter: userActer,
    }

    const acterWithFollowers: Acter = {
      ...ExampleActer,
      id: 'acter-followed-100',
      name: 'acter1',
      createdByUserId: 'b554a451-d53a-4d86-8776-NOT THIS USER',
      Followers: [
        {
          ...ExampleActerConnection,
          id: userActer.Following[0].id,
          followerActerId: userActer.id,
          followingActerId: ExampleActer.id,
          Follower: { ...userActer },
        },
        {
          ...ExampleActerConnection,
          id: acter1.Following[0].id,
          followerActerId: acter1.id,
          followingActerId: ExampleActer.id,
          Follower: { ...acter1 },
        },
      ],
    }

    expect(getFollowers(user, acterWithFollowers)).toContain([
      acter1,
      ExampleUserActer,
    ])
  })
})
