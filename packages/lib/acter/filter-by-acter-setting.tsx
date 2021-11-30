import { getActersCanJoin } from '@acter/lib/acter/get-can-acters-join'
import { ActerTypes } from '@acter/lib/constants/acter-types'
import { Acter, ActerWhoCanJoinSettings } from '@acter/schema'

const { ALL, ACTERS } = ActerWhoCanJoinSettings

export const filterConnectionsByActerSetting = (
  acter: Acter,
  connections: Acter[]
): Acter[] => {
  const actersCanJoin = getActersCanJoin(acter)

  const getFilteredConnections = (
    connections: Acter[],
    type: ActerWhoCanJoinSettings
  ) => {
    const filteredActers = connections.filter((acter) =>
      type === ACTERS
        ? acter.ActerType.name !== ActerTypes.USER
        : acter.ActerType.name === ActerTypes.USER
    )
    return filteredActers
  }

  if (actersCanJoin !== ALL) {
    const filteredConnections = getFilteredConnections(
      connections,
      actersCanJoin
    )
    return filteredConnections
  }
  return connections
}
