import { ActivityActerType } from './acter-type/activity'
import { GroupActerType } from './acter-type/group'
import { NetworkActerType } from './acter-type/network'
import { OrganisationActerType } from './acter-type/organisation'
import { UserActerType } from './acter-type/user'
import { EventActivityType } from './activity-type/event'
import { IdeaActivityType } from './activity-type/idea'
import { ProjectActivityType } from './activity-type/project'

export * from './user/example-user'

export * from './interest/interests'
export * from './interest/example-acter-interest'
export * from './interest/example-interests'
export * from './interest/example-interest-type'
export * from './interest/example-approach'
export * from './interest/example-interest-type'

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

export { EventActivityType, IdeaActivityType, ProjectActivityType }

export const ActivityTypes = [
  EventActivityType,
  IdeaActivityType,
  ProjectActivityType,
]

export * from './acter-connection/example-acter-connection'

export * from './acter/example-acter'
export * from './acter/example-acter-list'
export * from './acter/example-acter-with-interests'
export * from './acter/example-acter-location-list'
export * from './activity/example-activity'
export * from './post/example-post'
export * from './link/example-link'
