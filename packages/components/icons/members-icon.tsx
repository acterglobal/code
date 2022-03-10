import React, { FC } from 'react'

import { SvgIcon, SvgIconProps, useTheme } from '@mui/material'

export const MembersIcon: FC<SvgIconProps> = (props) => {
  const theme = useTheme()
  const iconColor = props.style?.color || theme.palette.secondary.light
  const backgroundColor = theme.palette.secondary.main
  return (
    <SvgIcon {...props}>
      <svg viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.9082 5.20117C15.4832 5.20016 15.8869 9.50667 15.8098 11.5949C15.8013 11.8241 15.6101 12.0005 15.3808 12.0005H6.97336C6.44423 12.0005 6.00229 11.5835 6.00018 11.0543C5.97688 5.20226 9.36133 5.20151 10.9073 5.20117H10.9082Z"
          stroke={iconColor}
          strokeWidth={props.style?.fontWeight === 'bold' ? 2 : 0.85}
        />
        <path
          d="M12.8494 2.79979C12.8494 4.06231 11.8069 5.09958 10.5038 5.09958C9.20068 5.09958 8.1582 4.06231 8.1582 2.79979C8.1582 1.53727 9.20068 0.5 10.5038 0.5C11.8069 0.5 12.8494 1.53727 12.8494 2.79979Z"
          stroke={iconColor}
          strokeWidth={props.style?.fontWeight === 'bold' ? 2 : 0.85}
        />
        <path
          d="M7.03692 6.50098C12.6698 6.49971 13.1617 11.8942 13.0654 14.5017C13.055 14.7835 12.82 15.0008 12.5381 15.0008H1.98146C1.45196 15.0008 1.01099 14.5837 1.00258 14.0542C0.882635 6.50236 5.1141 6.50141 7.03589 6.50098H7.03692Z"
          fill={backgroundColor}
          stroke={iconColor}
          strokeWidth={props.style?.fontWeight === 'bold' ? 2 : 0.85}
        />
        <circle
          cx="6.53906"
          cy="3.5"
          r="3"
          fill={backgroundColor}
          stroke={iconColor}
          strokeWidth={props.style?.fontWeight === 'bold' ? 2 : 0.85}
        />
      </svg>
    </SvgIcon>
  )
}
