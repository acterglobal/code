import { Acter } from '@schema'

export const mapFollowers = (acter: Acter): { [key: string]: Acter[] } => {
  return (
    acter.Followers?.reduce((map, { Follower }) => {
      const type = Follower.ActerType?.name || ''
      const currentMap = map[type] || []
      return {
        ...map,
        [type]: [...currentMap, Follower],
      }
    }, {}) || {}
  )
}
