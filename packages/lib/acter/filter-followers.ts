import { Acter } from '@acter/schema/types'
import { ActerTypes } from '@acter/lib/constants'

const { ACTIVITY, NETWORK, ORGANISATION, USER } = ActerTypes

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
    // Networks can connect to activities
    case NETWORK:
      return acter.ActerType.name === ACTIVITY
    // Orgs can only connect to Networks or Activities
    case ORGANISATION:
      return [ACTIVITY, NETWORK].includes(acter.ActerType.name as ActerTypes)
    // Users can connect to anything
    case USER:
      return true
    default:
      return false
  }
}
