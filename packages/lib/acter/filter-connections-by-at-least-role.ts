import { connectionHasAtLeastRole } from '@acter/lib/acter/connection-has-at-least-role'
import { ActerConnection, ActerConnectionRole } from '@acter/schema'

export const filterConnectionsByAtLeastRole = (
  connections: ActerConnection[],
  role: ActerConnectionRole
): ActerConnection[] => {
  return connections.filter((connection) =>
    connectionHasAtLeastRole(connection, role)
  )
}
