import { connectionHasAtLeastRole } from '@acter/lib/acter/connection-has-at-least-role'
import { ExampleActerConnection } from 'src/__fixtures__'
import { ActerConnection, ActerConnectionRole } from '@acter/schema/types'

describe('connectionHasAtLeastRole', () => {
  let connection: ActerConnection

  describe('for PENDING connection', () => {
    beforeAll(() => {
      connection = {
        ...ExampleActerConnection,
        role: ActerConnectionRole.PENDING,
      }
    })

    it('should return true when checking for PENDING', () => {
      expect(
        connectionHasAtLeastRole(connection, ActerConnectionRole.PENDING)
      ).toBe(true)
    })

    it('should return false when checking for MEMBER', () => {
      expect(
        connectionHasAtLeastRole(connection, ActerConnectionRole.MEMBER)
      ).toBe(false)
    })

    it('should return false when checking for ADMIN', () => {
      expect(
        connectionHasAtLeastRole(connection, ActerConnectionRole.ADMIN)
      ).toBe(false)
    })
  })

  describe('for MEMBER connection', () => {
    beforeAll(() => {
      connection = {
        ...ExampleActerConnection,
        role: ActerConnectionRole.MEMBER,
      }
    })

    it('should return true when connection is PENDING', () => {
      expect(
        connectionHasAtLeastRole(connection, ActerConnectionRole.PENDING)
      ).toBe(true)
    })

    it('should return true when checking for MEMBER', () => {
      expect(
        connectionHasAtLeastRole(connection, ActerConnectionRole.MEMBER)
      ).toBe(true)
    })

    it('should return false when checking for ADMIN', () => {
      expect(
        connectionHasAtLeastRole(connection, ActerConnectionRole.ADMIN)
      ).toBe(false)
    })
  })

  describe('for ADMIN connection', () => {
    beforeAll(() => {
      connection = {
        ...ExampleActerConnection,
        role: ActerConnectionRole.ADMIN,
      }
    })

    it('should return true when checking for PENDING', () => {
      expect(
        connectionHasAtLeastRole(connection, ActerConnectionRole.PENDING)
      ).toBe(true)
    })

    it('should return true when checking for MEMBER', () => {
      expect(
        connectionHasAtLeastRole(connection, ActerConnectionRole.MEMBER)
      ).toBe(true)
    })

    it('should return true when checking for ADMIN', () => {
      expect(
        connectionHasAtLeastRole(connection, ActerConnectionRole.ADMIN)
      ).toBe(true)
    })
  })
})
