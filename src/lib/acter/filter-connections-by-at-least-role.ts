import { ActerConnection, ActerConnectionRole } from '@schema'
import { connectionHasAtLeastRole } from 'src/lib/acter/connection-has-at-least-role'

export const filterConnectionsByAtLeastRole = (
  connections: ActerConnection[],
  role: ActerConnectionRole
): ActerConnection[] => {
  return connections.filter((connection) =>
    connectionHasAtLeastRole(connection, role)
  )
}
