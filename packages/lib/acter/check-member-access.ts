import { filterConnectionsByActerSetting } from '@acter/lib/acter/filter-by-acter-setting'
import { followerHasRoleOnActer } from '@acter/lib/acter/follower-has-role-on-acter'
import { getPotentialFollowers } from '@acter/lib/acter/get-potential-followers'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { Acter, ActerConnectionRole, User } from '@acter/schema'

/**
 * If user or user followings has member role on acter, return true
 * @param user user and its followings to check member access on acter
 * @param acter on which member access checking
 * @returns boolean
 */
export const checkMemberAccess = (user: User, acter: Acter): boolean => {
  if (!user || !acter) return false

  const isMember = userHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter)

  if (isMember) return true

  const followers = getPotentialFollowers(user, acter)
  const selectedFollowers = filterConnectionsByActerSetting(acter, followers)

  const atLeastOneFollowerMemberOnActer = selectedFollowers.find((follower) =>
    followerHasRoleOnActer(follower, ActerConnectionRole.MEMBER, acter)
  )

  return !!atLeastOneFollowerMemberOnActer
}
