import { Acter, ActerConnection } from '@acter/schema'

/**
 * Function to look for an ActerConnection on `acter` for a given `follower`
 * @param acter Acter for which we are looking at existing connections
 * @param potentialFollower Follower Acter which may or may not be already connected to Acter
 * @returns An ActerConnection if one exists, or null if none
 */
export const getActerConnection = (
  acter: Acter,
  potentialFollower: Acter
): ActerConnection | undefined => {
  if (!acter?.Followers?.length) {
    return
  }

  return acter.Followers.find(
    ({ Follower }) => Follower.id === potentialFollower.id
  )
}
