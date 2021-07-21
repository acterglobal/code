import { CSSProperties } from 'react'

type Color = CSSProperties['color']

type Grey = {
  extraLight: Color
  light: Color
  main: Color
  dark: Color
}

type ActivityTypes = {
  event: Color
  project: Color
  idea: Color
  meeting: Color
  dark: {
    event: Color
    project: Color
    idea: Color
    meeting: Color
  }
}

type InterestTypes = {
  Economy: Color
  Environment: Color
  Social: Color
  Approach: Color
  Focus: Color
  Tags: Color
}

type Others = {
  searchTab: Color
}

export type Colors = {
  black: Color
  grey: Grey
  white: Color
  activityTypes: ActivityTypes
  interestTypes: InterestTypes
  others: Others
}

export const paletteColors = {
  primary: {
    main: '#1EB001',
  },
  secondary: {
    main: '#545559',
    dark: '#2A2A2A',
    light: '#D5D5D5',
    contrastText: '#D5D5D5',
  },
  background: {
    default: '#EEEDF0',
  },
}

export const colors: Colors = {
  black: '#000',
  white: '#fff',
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
  },
}
