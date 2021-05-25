import { filterFollowers } from 'src/lib/acter/filter-followers'
import { Acter, User } from '@schema'

/**
 * Get a list of Acters for the current User which can follow the given Acter
 * @param user User for which we will get a list of potential followers
 * @param acter Acter we wish to follow
 * @returns A list of Acters
 */
export const getFollowers = (user: User, acter: Acter): Acter[] => {
  if (!user.Acter?.Following?.length) {
    return []
  }

  const followers = user.Acter.Following.map(
    ({ Following }) => Following
  ).filter(filterFollowers(acter))

  // Only include the User's UserActer if this Acter was not created by the User
  if (acter.createdByUserId !== user.id) {
    followers.unshift(user.Acter)
  }
  return followers
}
