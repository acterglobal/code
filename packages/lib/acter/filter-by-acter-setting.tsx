import { getCanActersJoin } from '@acter/lib/acter/get-can-acters-join'
import { ActerTypes } from '@acter/lib/constants/acter-types'
import { Acter } from '@acter/schema'

export const filterConnectionsByActerSetting = (
  acter: Acter,
  connections: Acter[]
): Acter[] => {
  const isActersCanJoin = getCanActersJoin(acter)

  if (!isActersCanJoin) {
    const filteredConnections = connections.filter(
      (acter) => acter.ActerType.name === ActerTypes.USER
    )
    return filteredConnections
  }
  return connections
}
