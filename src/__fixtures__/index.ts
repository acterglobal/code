export * from './interest/interests'
export * from './interest/example-interests'
export * from './interest/example-interest-type'
export * from './interest/example-approach'
export * from './interest/example-interest-type'

import { ActivityActerType } from './acter-type/activity'
import { GroupActerType } from './acter-type/group'
import { NetworkActerType } from './acter-type/network'
import { OrganisationActerType } from './acter-type/organisation'
import { UserActerType } from './acter-type/user'

export {
  ActivityActerType,
  GroupActerType,
  NetworkActerType,
  OrganisationActerType,
  UserActerType,
}
export const ActerTypes = [
  ActivityActerType,
  GroupActerType,
  NetworkActerType,
  OrganisationActerType,
  UserActerType,
]

import { EventActivityType } from './activity-type/event'
import { IdeaActivityType } from './activity-type/idea'
import { ProjectActivityType } from './activity-type/project'

export { EventActivityType, IdeaActivityType, ProjectActivityType }

export const ActivityTypes = [
  EventActivityType,
  IdeaActivityType,
  ProjectActivityType,
]

export * from './acter-connection/example-acter-connection'

export * from './user/example-user'
export * from './acter/example-acter'
export * from './acter/example-acter-list'

export * from './activity/example-activity'

export * from  './message/example-message'