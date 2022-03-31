import { MainActerTypes } from './acter-types'
import { ActivityTypes } from './activity-types'

const { EVENT, IDEA, PROJECT, MEETING } = ActivityTypes

export enum SearchType {
  ACTERS = 'acters',
  ACTIVITIES = 'activities',
}

export enum ResultKey {
  ACTERS = 'acters',
  ACTIVITIES = 'searchActivities',
}

export enum ResultDisplayType {
  LIST = 'list',
  MAP = 'map',
}

export const ActerSearchTypes = [...MainActerTypes]

export const ActivitySearchTypes = [EVENT, IDEA, PROJECT, MEETING]
