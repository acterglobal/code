import { v4 } from 'uuid'

import { filterConnectionsByAtLeastRole } from '@acter/lib/acter/filter-connections-by-at-least-role'
import { ActerConnectionRole } from '@acter/schema'
import { ExampleActerConnection } from '@acter/schema/fixtures'

describe('filterConnectionsByRole', () => {
  it('should split a list of connections into buckets for each role', () => {
    const connections = [
      {
        ...ExampleActerConnection,
        id: v4(),
        role: ActerConnectionRole.ADMIN,
      },
      {
        ...ExampleActerConnection,
        id: v4(),
        role: ActerConnectionRole.MEMBER,
      },
      {
        ...ExampleActerConnection,
        id: v4(),
        role: ActerConnectionRole.MEMBER,
      },
      {
        ...ExampleActerConnection,
        id: v4(),
        role: ActerConnectionRole.PENDING,
      },
      {
        ...ExampleActerConnection,
        id: v4(),
        role: ActerConnectionRole.PENDING,
      },
      {
        ...ExampleActerConnection,
        id: v4(),
        role: ActerConnectionRole.PENDING,
      },
    ]

    const memberConnections = filterConnectionsByAtLeastRole(
      connections,
      ActerConnectionRole.MEMBER
    )
    expect(memberConnections).toHaveLength(3)
    memberConnections.forEach((connection) => {
      expect(connection.role).not.toBe(ActerConnectionRole.PENDING)
    })
  })
})
