import React, { FC } from 'react'

import { SvgIcon, SvgIconProps, useTheme } from '@material-ui/core'

export const ProjectActivityIcon: FC<SvgIconProps> = (props) => {
  const theme = useTheme()
  const iconColor = props.style?.color || theme.colors.activityTypes.project

  return (
    <SvgIcon {...props}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 16.625C17.6244 16.625 20.5625 13.6869 20.5625 10.0625C20.5625 6.43813 17.6244 3.5 14 3.5C10.3756 3.5 7.4375 6.43813 7.4375 10.0625C7.4375 13.6869 10.3756 16.625 14 16.625Z"
          stroke={iconColor}
          strokeLinejoin="round"
        />
        <path
          d="M18.8125 24.5C22.4369 24.5 25.375 21.5619 25.375 17.9375C25.375 14.3131 22.4369 11.375 18.8125 11.375C15.1881 11.375 12.25 14.3131 12.25 17.9375C12.25 21.5619 15.1881 24.5 18.8125 24.5Z"
          stroke={iconColor}
          strokeLinejoin="round"
        />
        <path
          d="M9.1875 24.5C12.8119 24.5 15.75 21.5619 15.75 17.9375C15.75 14.3131 12.8119 11.375 9.1875 11.375C5.56313 11.375 2.625 14.3131 2.625 17.9375C2.625 21.5619 5.56313 24.5 9.1875 24.5Z"
          stroke={iconColor}
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  )
}