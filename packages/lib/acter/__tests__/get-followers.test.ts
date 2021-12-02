import { canFollowActer } from '@acter/lib/acter/can-follow-acter'
import { getFollowers } from '@acter/lib/acter/get-followers'
import { Acter } from '@acter/schema'
import {
  ExampleActer,
  ExampleUser,
  ExampleUserActer,
  ExampleActerConnection,
} from '@acter/schema/fixtures'

jest.mock('@acter/lib/acter/can-follow-acter')

describe('getFollowers', () => {
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

  it('should create a list of Acters for which the current User is following', () => {
    const acter1 = {
      ...ExampleActer,
      uuid: 'b554a451-d53a-4d86-8776-795351354160',
      name: 'acter1',
    }
    const acter2 = {
      ...ExampleActer,
      uuid: 'b554a451-d53a-4d86-8776-795351354160',
      name: 'acter2',
    }
    const user = {
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

    expect(getFollowers(user, ExampleActer)).toStrictEqual([acter1, acter2])
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
