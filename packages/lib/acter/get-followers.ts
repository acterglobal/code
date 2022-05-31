import { Acter, User } from '@acter/schema'

import { ActerTypes } from '../constants'

/**
 * Get a list of Acters for the current User which follow the given Acter
 * @param user User for which we will get a list of potential followers
 * @param acter Acter we wish to follow
 * @returns A list of Acters
 */

const { GROUP, USER } = ActerTypes

export const getFollowers = (user: User, acter: Acter): Acter[] => {
  if (!user?.Acter?.Following || !acter) {
    return []
  }

  const isCreator = user.id === acter.createdByUserId

  const acterFilteredFollowers = acter.Followers.map(({ Follower }) => {
    if (Follower.id === user.Acter?.id || Follower.ActerType.name !== USER)
      return Follower
  })

  const userConnections = user.Acter.Following.map(({ Following }) => {
    if (Following.ActerType.name !== GROUP) return Following
  })

  const userActerFilteredConnections = acterFilteredFollowers.filter(
    (acterFollower) => {
      return userConnections.some((userConnection) => {
        return (
          acterFollower?.id === userConnection?.id ||
          !(isCreator && acterFollower?.id === user.Acter.id)
        )
      })
    }
  )

  return userActerFilteredConnections
}
