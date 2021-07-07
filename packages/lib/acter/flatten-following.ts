import { Acter } from '@acter/schema/types'

export const flattenFollowingMap = (acter: Acter): { [key: string]: Acter } => {
  if (!acter?.Following) {
    return {}
  }
  return acter.Following.reduce((prev, { Following }) => {
    return {
      ...prev,
      [Following.id]: Following,
      ...flattenFollowingMap(Following),
    }
  }, {})
}

export const flattenFollowing = (acter: Acter): Acter[] =>
  Object.values(flattenFollowingMap(acter))
