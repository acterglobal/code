import { Acter } from '@schema'
import { ACTIVITY, NETWORK, ORGANISATION, USER } from 'src/constants'

/**
 * A curry function for determining if Acter `follower` can follow Acter `acter`
 * @param acter Acter we will try to follow
 * @returns a function that takes a second `follower` Acter for which we determine if following is allowed
 */
export const filterFollowers = (acter: Acter) => (
  following: Acter
): boolean => {
  // Don't include self
  if (following.id === acter.id) return false

  // Don't include activity organizer
  if (
    acter.ActerType.name === ACTIVITY &&
    acter.Activity.organiserId === following.id
  ) {
    return false
  }

  switch (following.ActerType.name.toLowerCase()) {
    // Activities cannot connect to other types
    case ACTIVITY:
      return false
    // Networks cannot connect to anything
    case NETWORK:
      return false
    // Orgs can only connect to Networks or Activities
    case ORGANISATION:
      return [ACTIVITY, NETWORK].includes(acter.ActerType.name)
    // Users can connect to anything
    case USER:
      return true
    default:
      return false
  }
}
