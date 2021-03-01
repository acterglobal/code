export * from './interest/interests'
export * from './interest/example-interest-type'
export * from './interest/example-approach'
export * from './interest/example-interest-type'

import { GroupActerType } from './acter-type/group'
import { NetworkActerType } from './acter-type/network'
import { OrganizationActerType } from './acter-type/organization'
import { UserActerType } from './acter-type/user'

export {
  GroupActerType,
  NetworkActerType,
  OrganizationActerType,
  UserActerType,
}
export const ActerTypes = [
  GroupActerType,
  NetworkActerType,
  OrganizationActerType,
  UserActerType,
]

export * from './user/example-user'
export * from './acter/example-acter'
export * from './acter/example-acter-list'
