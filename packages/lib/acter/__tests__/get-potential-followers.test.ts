import { canFollowActer } from '@acter/lib/acter/can-follow-acter'
import { getPotentialFollowers } from '@acter/lib/acter/get-potential-followers'
import { Acter, User } from '@acter/schema'
import {
  ExampleActer,
  ExampleUser,
  ExampleUserActer,
  ExampleActerConnection,
} from '@acter/schema/fixtures'

jest.mock('@acter/lib/acter/can-follow-acter')

describe('getPotentialFollowers', () => {
  beforeAll(() => {
    const mockFilterFollowers = canFollowActer as jest.Mock
    mockFilterFollowers.mockImplementation(
      (acters: Acter[]) => (_acter: Acter) => acters
    )
  })

  it('should return an empty array if there is no Acter', () => {
    const user = {
      ...ExampleUser,
      Acter: null,
    }

    expect(getPotentialFollowers(user, ExampleActer)).toStrictEqual([])
  })

  it('should return an empty array if user not following any acters', () => {
    const user = {
      ...ExampleUser,
      Acter: {
        ...ExampleUserActer,
        Following: null,
      },
    }

    expect(getPotentialFollowers(user, ExampleActer)).toStrictEqual([])
  })

  it('should create a list of Acters for which the current User is following', () => {
    const acter1: Acter = {
      ...ExampleActer,
      id: 'b554a451-d53a-4d86-8776-795351354160',
      name: 'acter1',
    }
    const acter2: Acter = {
      ...ExampleActer,
      id: 'b554a451-d53a-4d86-8776-795351354161',
      name: 'acter2',
    }
    const user: User = {
      ...ExampleUser,
      Acter: {
        ...ExampleUserActer,
        Following: [
          {
            ...ExampleActerConnection,
            Following: acter1,
          },
          {
            ...ExampleActerConnection,
            Following: acter2,
          },
        ],
      },
    }

    const ExampleActer1: Acter = {
      ...ExampleActer,
    }

    expect(getPotentialFollowers(user, ExampleActer1)).toStrictEqual([
      user.Acter,
      acter1,
      acter2,
    ])
  })

  it("should NOT add the User's Acter when the user created the other Acter and a connection exits", () => {
    // Users cannot leave an Acter they created
    const userActer: Acter = {
      ...ExampleUserActer,
    }
    const user: User = {
      ...ExampleUser,
      Acter: userActer,
    }
    const acterCreatedByUser: Acter = {
      ...ExampleActer,
      createdByUser: user,
      Followers: [
        {
          ...ExampleActerConnection,
          Follower: userActer,
        },
      ],
    }

    expect(getPotentialFollowers(user, acterCreatedByUser)).not.toContain(
      userActer
    )
  })

  it("should add the User's Acter when the user created the other Acter but no connection exists", () => {
    // This allows users to re-join an Acter they created but have been removed from
    const userActer: Acter = {
      ...ExampleUserActer,
    }
    const user: User = {
      ...ExampleUser,
      Acter: userActer,
    }
    const acterCreatedByUser: Acter = {
      ...ExampleActer,
      createdByUser: user,
      Followers: [],
    }

    expect(getPotentialFollowers(user, acterCreatedByUser)).toContain(userActer)
  })
})
