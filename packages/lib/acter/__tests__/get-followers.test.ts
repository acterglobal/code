import { getFollowers } from '@acter/lib/acter/get-followers'
import { Acter } from '@acter/schema'
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
    const acter1 = {
      ...ExampleActer,
      id: 'acter-100',
      // uuid: 'b554a451-d53a-4d86-8776-795351354160',
      // name: 'acter1',
      Following: [
        {
          ...ExampleActerConnection,
          Following: [
            {
              ...ExampleActer,
              id: 'acter-followed-100',
            },
          ],
        },
      ],
    }

    const userActer = {
      ...ExampleUserActer,
      id: 'user-acter-100',
      Following: [
        {
          ...ExampleActerConnection,
          Following: {
            ...ExampleActer,
            id: 'acter-followed-100',
          },
        },
      ],
    }

    const user = {
      ...ExampleUser,
      Acter: userActer,
    }

    const acterWithFollowers = {
      ...ExampleActer,
      id: 'acter-followed-100',
      name: 'acter1',
      createdByUserId: 'b554a451-d53a-4d86-8776-NOT THIS USER',
      Followers: [
        {
          ...ExampleActerConnection,
          id: 'user-connection-1',
          Follower: userActer,
        },
        {
          ...ExampleActerConnection,
          id: 'acter-connection-1',
          Follower: acter1,
        },
      ],
    }

    expect(getFollowers(user, acterWithFollowers)).toBe([
      acter1,
      ExampleUserActer,
    ])
  })

  it("should only add the current User's Acter if the given Acter was not created by the User", () => {
    const userActer = {
      ...ExampleUserActer,
      Following: [ExampleActerConnection],
    }
    const user = {
      ...ExampleUser,
      Acter: userActer,
    }
    const acterCreatedByUser = {
      ...ExampleActer,
      createdByUserId: user.id,
    }
    const acterCreatedByAnotherUser = {
      ...ExampleActer,
      createdByUserId: '1c88534b-7158-40ec-81a9-31d973077916',
    }

    expect(getFollowers(user, acterCreatedByUser)).not.toContain(userActer)

    expect(getFollowers(user, acterCreatedByAnotherUser)).toContain(userActer)
  })
})
