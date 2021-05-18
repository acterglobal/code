import { followerHasRoleOnActer } from 'src/lib/acter/follower-has-role-on-acter'
import {
  ExampleActer,
  ExampleActerConnection,
  ExampleUserActer,
} from 'src/__fixtures__'
import { ActerConnectionRole } from '@schema'

describe('followerHasRoleOnActer', () => {
  it('should return false when user has no admin permissions', () => {
    const follower = {
      ...ExampleActer,
      id: '6ac845b5-3136-4b4b-9c61-ea241beb4b31',
    }
    const acter = {
      ...ExampleActer,
      id: 'a27e4a92-bc9c-463e-a4b8-19590d17dc65',
    }
    expect(
      followerHasRoleOnActer(follower, ActerConnectionRole.ADMIN, acter)
    ).toBe(false)
  })

  it('should return true if the User has the requested role', () => {
    const user = {
      ...ExampleUserActer,
    }

    const acter = {
      ...ExampleActer,
      Followers: [
        {
          ...ExampleActerConnection,
          Follower: user,
          role: ActerConnectionRole.ADMIN,
        },
      ],
    }

    expect(followerHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)).toBe(
      true
    )
  })

  it('should return true if the User has a higher role than requested', () => {
    const user = {
      ...ExampleUserActer,
    }

    const acter = {
      ...ExampleActer,
      Followers: [
        {
          ...ExampleActerConnection,
          Follower: user,
          role: ActerConnectionRole.ADMIN,
        },
      ],
    }

    expect(
      followerHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter)
    ).toBe(true)
  })
})
