import { Acter, ActerConnection } from '@acter/schema/types'

export const mapFollowersByType = (
  acter: Acter
): { [key: string]: ActerConnection[] } => {
  return (
    acter.Followers?.reduce((map, connection) => {
      const type = connection.Follower.ActerType?.name
      const currentMap = map[type] || []
      return {
        ...map,
        [type]: [...currentMap, connection],
      }
    }, {}) || {}
  )
}
