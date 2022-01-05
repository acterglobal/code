import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { filterConnectionsByActerSetting } from '@acter/lib/acter/filter-by-acter-setting'
import { followerHasRoleOnActer } from '@acter/lib/acter/follower-has-role-on-acter'
import { getFollowers } from '@acter/lib/acter/get-followers'
import {
  ExampleActer,
  ExampleUser,
  ExampleUserActer,
} from '@acter/lib/fixtures'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { User } from '@acter/schema'

jest.mock('@acter/lib/user/user-has-role-on-acter')
jest.mock('@acter/lib/acter/get-followers')
jest.mock('@acter/lib/acter/filter-by-acter-setting')
jest.mock('@acter/lib/acter/follower-has-role-on-acter')

describe('checkMemberAccess', () => {
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
    },
  } as User

  const mockedUserHasRoleOnActer = userHasRoleOnActer as jest.Mock
  const mockedGetFollowers = getFollowers as jest.Mock
  const mockedFilterConnectionsByActerSetting = filterConnectionsByActerSetting as jest.Mock
  const mockedFollowerHasRoleOnActer = followerHasRoleOnActer as jest.Mock

  beforeEach(() => {
    mockedGetFollowers.mockReturnValue([acter1, acter2])
    mockedFilterConnectionsByActerSetting.mockReturnValue([acter1, acter2])
  })

  it('should return false if there is no user or acter passed', () => {
    expect(checkMemberAccess(null, null)).toBe(false)
  })

  it('should return false if there are no Followers', () => {
    const user = {
      ...ExampleUser,
      Acter: {
        ...ExampleUserActer,
        Followers: null,
      },
    }

    expect(checkMemberAccess(user, ExampleActer)).toBe(false)
  })

  it('should not give member access when user has no member role on acter', () => {
    expect(checkMemberAccess(user, ExampleActer)).toBe(false)
  })

  it('should give member access when user has member role on acter', () => {
    mockedUserHasRoleOnActer.mockReturnValue(true)

    expect(checkMemberAccess(user, ExampleActer)).toBe(true)
  })

  it('should give member access when on of the user followings has member role on acter', () => {
    mockedUserHasRoleOnActer.mockReturnValue(false)
    mockedFollowerHasRoleOnActer.mockReturnValue(true)

    expect(checkMemberAccess(user, ExampleActer)).toBe(true)
  })
})
