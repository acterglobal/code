import { Acter, User } from '@schema'

/**
 * Helper function to test whether a User follows an Acter
 * Does not check 2-hop follows at this time
 * @param acter Acter in question
 * @param user User that may or may not follow the Acter
 * @returns true if the User follows the Acter, if not false
 */
export const userIsFollower = (acter: Acter, user: User): boolean =>
  acter.Followers?.map(({ Follower: { id } }) => id).includes(user?.Acter?.id)
