import { followerHasRoleOnActer } from '@acter/lib/acter/follower-has-role-on-acter'
import {
  ExampleActer,
  ExampleActerConnection,
  ExampleUserActer,
} from '@acter/schema/fixtures'
import { Acter, ActerConnectionRole, ActerJoinSettings } from '@acter/schema'

describe('followerHasRoleOnActer', () => {
  it('should return false when there is no connection between acter and follower', () => {
    const follower: Acter = {
      ...ExampleActer,
      id: '6ac845b5-3136-4b4b-9c61-ea241beb4b31',
    }
    const acter: Acter = {
      ...ExampleActer,
      id: 'a27e4a92-bc9c-463e-a4b8-19590d17dc65',
      acterJoinSetting: ActerJoinSettings.RESTRICTED,
    }
    expect(
      followerHasRoleOnActer(follower, ActerConnectionRole.ADMIN, acter)
    ).toBe(false)
  })

  it('should return false when user has a lesser role', () => {
    const user: Acter = {
      ...ExampleUserActer,
    }
    const follower: Acter = {
      ...ExampleActer,
      id: '6ac845b5-3136-4b4b-9c61-ea241beb4b31',
    }
    const acter: Acter = {
      ...ExampleActer,
      id: 'a27e4a92-bc9c-463e-a4b8-19590d17dc65',
      acterJoinSetting: ActerJoinSettings.RESTRICTED,
      Followers: [
        {
          ...ExampleActerConnection,
          Follower: user,
          role: ActerConnectionRole.PENDING,
        },
      ],
    }
    expect(
      followerHasRoleOnActer(follower, ActerConnectionRole.MEMBER, acter)
    ).toBe(false)
  })

  it('should return true if the User has the requested role', () => {
    const user: Acter = {
      ...ExampleUserActer,
    }

    const acter: Acter = {
      ...ExampleActer,
      acterJoinSetting: ActerJoinSettings.RESTRICTED,
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
    const user: Acter = {
      ...ExampleUserActer,
    }

    const acter: Acter = {
      ...ExampleActer,
      acterJoinSetting: ActerJoinSettings.RESTRICTED,
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
