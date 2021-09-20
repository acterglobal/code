import { ActerTypes } from './acter-types'
import { ActivityTypes } from './activity-types'

export enum SearchType {
  ACTERS = 'acters',
  ACTIVITIES = 'activities',
}

export enum ResultKey {
  ACTERS = 'acters',
  ACTIVITIES = 'searchActivities',
}

export const ActerSearchTypes = [ActerTypes.ORGANISATION, ActerTypes.NETWORK]
export const ActivitySearchTypes = [
  ActivityTypes.EVENT,
  ActivityTypes.IDEA,
  ActivityTypes.PROJECT,
]
