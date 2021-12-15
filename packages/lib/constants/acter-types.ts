export enum ActerTypes {
  ACTIVITY = 'activity',
  GROUP = 'group',
  NETWORK = 'network',
  ORGANISATION = 'organisation',
  PUBLIC_ORGANISATION = 'public organisation',
  USER = 'user',
  COMMUNITY = 'community',
  NGO = 'NGO',
  COMPANY = 'company',
  UNIVERSITY = 'university',
}

const {
  NETWORK,
  ORGANISATION,
  PUBLIC_ORGANISATION,
  COMMUNITY,
  NGO,
  COMPANY,
  UNIVERSITY,
} = ActerTypes

export const MainActerTypes = [
  NETWORK,
  ORGANISATION,
  PUBLIC_ORGANISATION,
  COMMUNITY,
  NGO,
  COMPANY,
  UNIVERSITY,
]
