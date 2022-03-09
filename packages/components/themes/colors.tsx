import { CSSProperties } from 'react'

import { ActivityTypes, InterestTypes } from '@acter/lib/constants'

export type Color = CSSProperties['color']

type Grey = {
  extraLight: Color
  light: Color
  main: Color
  dark: Color
}

type Blue = {
  dark: Color
  light: Color
}

type ActivityTypeColor = {
  [key in ActivityTypes]: Color
}

type ActivityTypeDarkColor = {
  dark: ActivityTypeColor
}

type ActivityTypeColors = ActivityTypeColor & ActivityTypeDarkColor

type InterestTypeColors = {
  [key in InterestTypes]: Color
}

type OtherColors = {
  searchTab: Color
  notificationBadge: Color
}

type ContentColours = {
  title: Color
  description?: Color
}

export type Colors = {
  black: Color
  blue: Blue
  grey: Grey
  white: Color
  red: Color
  error: Color
  activityTypes: ActivityTypeColors
  interestTypes: InterestTypeColors
  others: OtherColors
  content: ContentColours
}

export const paletteColors = {
  primary: {
    main: '#1EB001',
  },
  secondary: {
    main: '#1B2941',
    dark: '#071528',
    light: '#D5D5D5',
    contrastText: '#D5D5D5',
  },
  background: {
    default: '#ECEFF4',
  },
}

export const colors: Colors = {
  black: '#000',
  white: '#fff',
  red: '#FF6754',
  error: '#EA4335',
  blue: {
    dark: '#243141',
    light: '#3A527D',
  },
  grey: {
    extraLight: '#E3E8F2',
    light: '#D9D9D9',
    main: '#929292',
    dark: '#5E5E5E',
  },
  activityTypes: {
    event: '#2A2A2A',
    project: '#67A24A',
    idea: '#ECAC3C',
    meeting: '#5778B2',
    dark: {
      event: '#4287f5',
      project: '#25cc04',
      idea: '#ffab03',
      meeting: '#D5D5D5',
    },
  },
  interestTypes: {
    Economy: '#FFC53B',
    Environment: '#69B656',
    Social: '#F29C40',
    Approach: '#545559',
    Focus: '#000',
    Tags: '#000',
  },
  others: {
    searchTab: 'rgba(196, 196, 196, 0.18)',
    notificationBadge: '#E15877',
  },
  content: {
    title: '#171717',
  },
}
