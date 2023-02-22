/**
 * Merge potential & actual followers of the given acter
 * @param filteredPotentialFollowers List of potential followers of the given Acter's settings
 * @param followers Current list of Acter followers
 * @returns A list of merged followers of the given acter
 */
import { Acter } from '@acter/schema'

export const mergeFollowers = (
  filteredPotentialFollowers: Acter[],
  followers: Acter[]
): Acter[] => {
  if (!filteredPotentialFollowers || !followers) return []

  const filteredPotentialFollowersMap = filteredPotentialFollowers.reduce(
    (state, payload) => ({ ...state, [payload.id]: payload }),
    {}
  )

  const mergedFollowers = followers.reduce((state, payload) => {
    if (payload && !filteredPotentialFollowersMap[payload.id]) {
      return [...state, payload]
    }
    return state
  }, filteredPotentialFollowers)

  return mergedFollowers
}
