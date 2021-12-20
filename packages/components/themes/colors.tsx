import { CSSProperties } from 'react'

import { ActivityTypes, InterestTypes } from '@acter/lib/constants'

export type Color = CSSProperties['color']

type Grey = {
  extraLight: Color
  light: Color
  main: Color
  dark: Color
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

export type Colors = {
  black: Color
  grey: Grey
  white: Color
  red: Color
  error: Color
  activityTypes: ActivityTypeColors
  interestTypes: InterestTypeColors
  others: OtherColors
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
  grey: {
    extraLight: '#F2F2F2',
    light: '#D9D9D9',
    main: '#929292',
    dark: '#5E5E5E',
  },
  activityTypes: {
    event: '#A3DAFF',
    project: '#8ED77F',
    idea: '#FED990',
    meeting: '#D5D5D5',
    dark: {
      event: '#4287f5',
      project: '#25cc04',
      idea: '#ffab03',
      meeting: '#D5D5D5',
    },
  },
  interestTypes: {
    Economy: '#F8BA00',
    Environment: '#1DB100',
    Social: '#FF644E',
    Approach: '#545559',
    Focus: '#000',
    Tags: '#000',
  },
  others: {
    searchTab: 'rgba(196, 196, 196, 0.18)',
    notificationBadge: '#E15877',
  },
}
