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

  const isUserActerCreator = user.id === acter.createdByUserId

  const filteredActerFollowers = acter.Followers.map(({ Follower }) => {
    if (Follower.id === user.Acter?.id || Follower.ActerType.name !== USER)
      return Follower
  })

  const filteredUserConnections = user.Acter.Following.map(({ Following }) => {
    if (Following.ActerType.name !== GROUP) return Following
  })

  const filteredActerFollowersMap = filteredActerFollowers.reduce(
    (state, payload) => ({ ...state, [payload.id]: payload }),
    {}
  )

  const mergedFollowers = filteredUserConnections.reduce((state, payload) => {
    if (filteredActerFollowersMap[payload?.id]) {
      return [...state, payload]
    }
    return state
  }, filteredActerFollowers)

  const selectedFollowers = mergedFollowers.filter(
    (follower) => isUserActerCreator && follower.id !== user.Acter.id
  )

  return selectedFollowers
}
