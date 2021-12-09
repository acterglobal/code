import { ActerTypes } from './acter-types'
import { ActivityTypes } from './activity-types'

const { EVENT, IDEA, PROJECT, MEETING } = ActivityTypes
const {
  ORGANISATION,
  NETWORK,
  PUBLIC_ORGANISATION,
  COMMUNITY,
  NGO,
  COMPANY,
  UNIVERSITY,
} = ActerTypes

export enum SearchType {
  ACTERS = 'acters',
  ACTIVITIES = 'activities',
}

export enum ResultKey {
  ACTERS = 'acters',
  ACTIVITIES = 'searchActivities',
}

export const ActerSearchTypes = [
  ORGANISATION,
  NETWORK,
  PUBLIC_ORGANISATION,
  COMMUNITY,
  NGO,
  COMPANY,
  UNIVERSITY,
]
export const ActivitySearchTypes = [EVENT, IDEA, PROJECT, MEETING]
