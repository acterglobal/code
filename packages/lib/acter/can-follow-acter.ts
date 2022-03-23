import { ActerTypes } from '@acter/lib/constants'
import { Acter } from '@acter/schema'

const { ACTIVITY, GROUP, USER } = ActerTypes

/**
 * A curry function for determining if Acter `follower` can follow Acter `acter`
 * @param acter Acter we will try to follow
 * @returns a function that takes a second `follower` Acter for which we determine if following is allowed
 */
export const canFollowActer =
  (acter: Acter) =>
  (following: Acter): boolean => {
    // Return if acter is not set
    if (!acter) return false

    // Don't include self
    if (following.id === acter.id) return false

    // Don't include activity organizer
    if (
      acter.ActerType.name === ACTIVITY &&
      (!acter.Activity || acter.Activity?.organiserId === following.id)
    ) {
      return false
    }

    switch (following.ActerType.name.toLowerCase()) {
      // Activities and (sub)groups cannot join anything
      case ACTIVITY:
      case GROUP:
        return false
      // Users can connect to anything
      case USER:
        return true
      // Anything else should be able to connect to everything but Users
      default:
        return ![USER].includes(acter.ActerType.name as ActerTypes)
    }
  }
