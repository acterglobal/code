import { ActerTypes, MemberType } from '@acter/lib/constants'
import { Acter, ActerConnection } from '@acter/schema'

const { PEOPLE, ACTERS } = MemberType

export const mapFollowersByType = (
  acter: Acter
): { [key: string]: ActerConnection[] } => {
  return (
    acter.Followers?.reduce((map, connection) => {
      const type = connection.Follower.ActerType?.name
      const key = type === ActerTypes.USER ? PEOPLE : ACTERS
      return {
        ...map,
        [key]: [...(map[key] || []), connection],
      }
    }, {}) || {}
  )
}
