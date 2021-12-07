import { ActerTypes } from '../constants'

import { Acter, ActerConnection } from '@acter/schema'

export const mapFollowersByType = (
  acter: Acter
): { [key: string]: ActerConnection[] } => {
  return (
    acter.Followers?.reduce((map, connection) => {
      const type = connection.Follower.ActerType?.name
      const currentMap = map[type] || []

      if (type === ActerTypes.USER) {
        return {
          ...map,
          ['user']: [...currentMap, connection],
        }
      }

      return {
        ...map,
        ['acters']: [...currentMap, connection],
      }
    }, {}) || {}
  )
}
