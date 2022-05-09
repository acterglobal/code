import React, { FC } from 'react'

import { SvgIconProps, useTheme } from '@material-ui/core'

export const IdeaActivityIcon: FC<SvgIconProps> = (props) => {
  const theme = useTheme()
  const iconColor = props.style?.color || theme.colors.activityTypes.idea

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.3333 24V22.5C19.3333 20.6875 21.5236 18.9732 22.9445 17.75C24.9472 16.0269 26 13.7119 26 11C26 6.00004 21.5743 2.00003 16 2.00003C14.6858 1.99674 13.3838 2.22728 12.1689 2.6784C10.954 3.12952 9.85011 3.79233 8.92079 4.62872C7.99148 5.4651 7.25502 6.45856 6.75378 7.55198C6.25253 8.6454 5.99637 9.81721 6.00004 11C6.00004 13.615 7.09795 16.0869 9.05559 17.75C10.4688 18.9507 12.6667 20.6688 12.6667 22.5V24"
        stroke={iconColor}
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 30H18"
        stroke={iconColor}
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 27H19"
        stroke={iconColor}
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 24V16"
        stroke={iconColor}
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.375 15C18.375 15 17.0306 16 16 16C14.9694 16 13.625 15 13.625 15"
        stroke={iconColor}
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
