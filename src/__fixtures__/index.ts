export * from './interest/interests'
export * from './interest/example-interest-type'
export * from './interest/example-approach'
export * from './interest/example-interest-type'

import { GroupActerType } from './acter-type/group'
import { NetworkActerType } from './acter-type/network'
import { OrganisationActerType } from './acter-type/organisation'
import { UserActerType } from './acter-type/user'

export {
  GroupActerType,
  NetworkActerType,
  OrganisationActerType,
  UserActerType,
}
export const ActerTypes = [
  GroupActerType,
  NetworkActerType,
  OrganisationActerType,
  UserActerType,
]

export * from './user/example-user'
export * from './acter/example-acter'
export * from './acter/example-acter-list'
