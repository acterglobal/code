import { userHasRoleOnActer } from 'src/lib/user/user-has-role-on-acter'
import { followerHasRoleOnActer } from 'src/lib/acter/follower-has-role-on-acter'

import { ExampleActer, ExampleUserActer, ExampleUser } from 'src/__fixtures__'
import { ActerConnectionRole } from '@schema'

jest.mock('src/lib/acter/follower-has-role-on-acter')

describe('userHasRoleOnActer', () => {
  it('should return false if the user is null (likely not logged in', () => {
    expect(
      userHasRoleOnActer(undefined, ActerConnectionRole.MEMBER, ExampleActer)
    ).toBe(false)
  })

  it("should return false if the user's Acter information is not availalbe", () => {
    expect(
      userHasRoleOnActer(
        { ...ExampleUser, Acter: undefined },
        ActerConnectionRole.MEMBER,
        ExampleActer
      )
    ).toBe(false)
  })

  it('should use followerHasRoleOnActer to determine access', () => {
    const mockedFollowerHasRoleOnActer = followerHasRoleOnActer as jest.Mock
    const user = { ...ExampleUser, Acter: ExampleUserActer }
    const role = ActerConnectionRole.MEMBER
    mockedFollowerHasRoleOnActer.mockImplementation(
      (impUser, impRole, acter) => {
        expect(impUser).toStrictEqual(ExampleUserActer)
        expect(impRole).toStrictEqual(role)
        expect(acter).toStrictEqual(ExampleActer)
      }
    )
    userHasRoleOnActer(user, role, ExampleActer)
    expect(mockedFollowerHasRoleOnActer).toBeCalledTimes(1)
  })
})
