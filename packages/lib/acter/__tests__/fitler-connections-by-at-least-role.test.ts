import { v4 } from 'uuid'
import { ExampleActerConnection } from 'src/__fixtures__'
import { ActerConnectionRole } from '@schema'
import { filterConnectionsByAtLeastRole } from '@acter/lib/acter/filter-connections-by-at-least-role'

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
