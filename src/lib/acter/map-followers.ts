import { Acter } from '@generated/type-graphql'

export const mapFollowers = (acter: Acter): { [key: string]: Acter[] } => {
  return (
    acter.Following?.reduce((map, { Following }) => {
      const type = Following.ActerType?.name || ''
      const currentMap = map[type] || []
      return {
        ...map,
        [type]: [...currentMap, Following],
      }
    }, {}) || {}
  )
}
