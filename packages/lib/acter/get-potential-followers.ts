import { canFollowActer } from '@acter/lib/acter/can-follow-acter'
import { getActerConnection } from '@acter/lib/acter/get-acter-connection'
import { Acter, User } from '@acter/schema'

/**
 * Get a list of Acters for the current User which can follow the given Acter
 * @param user User for which we will get a list of potential followers
 * @param acter Acter we wish to follow
 * @returns A list of Acters
 */
export const getPotentialFollowers = (user: User, acter: Acter): Acter[] => {
  if (!user?.Acter?.Following || !acter) {
    return []
  }

  const followers = user.Acter.Following.map(
    ({ Following }) => Following
  ).filter(canFollowActer(acter))

  const connection = getActerConnection(acter, user.Acter)

  // Only include the User's Acter if this Acter was not created by the User
  // OR it WAS created by the User but there is no longer a connection (i.e. rejoin)
  if (
    acter.createdByUserId !== user.id ||
    (acter.createdByUserId === user.id && !connection)
  ) {
    followers.unshift(user.Acter)
  }

  return followers
}
