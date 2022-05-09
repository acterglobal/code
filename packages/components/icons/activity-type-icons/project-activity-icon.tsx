import React, { FC } from 'react'

import { SvgIconProps, useTheme } from '@material-ui/core'

export const ProjectActivityIcon: FC<SvgIconProps> = (props) => {
  const theme = useTheme()
  const iconColor = props.style?.color || theme.colors.activityTypes.project

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 19C20.1421 19 23.5 15.6421 23.5 11.5C23.5 7.35786 20.1421 4 16 4C11.8579 4 8.5 7.35786 8.5 11.5C8.5 15.6421 11.8579 19 16 19Z"
        stroke={iconColor}
        stroke-width="1.3"
        stroke-linejoin="round"
      />
      <path
        d="M21.5 28C25.6421 28 29 24.6421 29 20.5C29 16.3579 25.6421 13 21.5 13C17.3579 13 14 16.3579 14 20.5C14 24.6421 17.3579 28 21.5 28Z"
        stroke={iconColor}
        stroke-width="1.3"
        stroke-linejoin="round"
      />
      <path
        d="M10.5 28C14.6421 28 18 24.6421 18 20.5C18 16.3579 14.6421 13 10.5 13C6.35786 13 3 16.3579 3 20.5C3 24.6421 6.35786 28 10.5 28Z"
        stroke={iconColor}
        stroke-width="1.3"
        stroke-linejoin="round"
      />
    </svg>
  )
}
