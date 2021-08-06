import { ActerConnection, ActerConnectionRole } from '@acter/schema'
import { connectionHasAtLeastRole } from '@acter/lib/acter/connection-has-at-least-role'

export const filterConnectionsByAtLeastRole = (
  connections: ActerConnection[],
  role: ActerConnectionRole
): ActerConnection[] => {
  return connections.filter((connection) =>
    connectionHasAtLeastRole(connection, role)
  )
}
