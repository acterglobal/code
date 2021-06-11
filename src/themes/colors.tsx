import colorString from 'color-string'
import { ActivityTypes } from 'src/constants'

type rgbColor = [number, number, number, number]
type rgbColorMap = Record<string, rgbColor>

const _activityTypeColors: rgbColorMap = {
  event: [0, 171, 142, 1],
  project: [30, 176, 1, 1],
  idea: [249, 186, 57, 1],
}

type ActivityTypeColorMap = Record<ActivityTypes, string>
export const activityTypeColors: ActivityTypeColorMap = Object.keys(
  _activityTypeColors
).reduce(
  (prev, type) => ({
    ...prev,
    [type]: colorString.to.rgb(_activityTypeColors[type]),
  }),
  ({} as unknown) as ActivityTypeColorMap
)

const backgroundOpacity = 0.2
export const activityTypeBackgroundColors: ActivityTypeColorMap = Object.keys(
  _activityTypeColors
).reduce(
  (prev, type) => ({
    ...prev,
    [type]: colorString.to.rgb([
      ..._activityTypeColors[type].slice(0, -1),
      backgroundOpacity,
    ]),
  }),
  ({} as unknown) as ActivityTypeColorMap
)

export const interestColors = {
  Economy: 'rgb(248, 186, 0)',
  Environment: 'rgb(29, 177, 0)',
  Social: 'rgb(255, 100, 78)',
  Approach: 'rgb(84, 85, 89)',
  Focus: 'black',
  Tags: 'black',
}

export const disabledColor = '#b5b5b5'
export const subMenuBackgroundColor = '#545559'
export const menuActiveTabColor = 'rgba(196, 196, 196, 0.18)'
