import { getCanActersJoin } from '@acter/lib/acter/get-can-acters-join'
import { Acter } from '@acter/schema'

export const filterConnectionsByActerSetting = (
  acter: Acter,
  connections: Acter[]
): Acter[] => {
  const isActersCanJoin = getCanActersJoin(acter)

  if (!isActersCanJoin) {
    const filteredConnections = connections.filter(
      (acter) => acter.ActerType.name === 'user'
    )
    console.log('This is filtered ', connections)
    return filteredConnections
  }
  return connections
}
