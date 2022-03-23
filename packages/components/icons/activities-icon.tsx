import React, { FC } from 'react'

import { SvgIcon, SvgIconProps } from '@mui/material'

export const ActivitiesIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox="0 -1 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="0.5"
          y="2.5"
          width="18"
          height="15"
          rx="2.5"
          stroke={props.htmlColor}
          strokeWidth={props.fontSize === 'large' ? 2 : 1}
        />
        <line
          x1="5.5"
          y1="5"
          x2="5.5"
          stroke={props.htmlColor}
          strokeWidth={props.fontSize === 'large' ? 2 : 1}
        />
        <line
          x1="19"
          y1="7.5"
          y2="7.5"
          stroke={props.htmlColor}
          strokeWidth={props.fontSize === 'large' ? 2 : 1}
        />
        <line
          x1="13.5"
          y1="5"
          x2="13.5"
          stroke={props.htmlColor}
          strokeWidth={props.fontSize === 'large' ? 2 : 1}
        />
        <rect
          x="4"
          y="10"
          width={props.fontSize === 'large' ? 2 : 1.3}
          height={props.fontSize === 'large' ? 2 : 1.3}
          rx="0.65"
          fill={props.htmlColor}
        />
        <rect
          x="9"
          y="13.999"
          width={props.fontSize === 'large' ? 2 : 1.3}
          height={props.fontSize === 'large' ? 2 : 1.3}
          rx="0.65"
          fill={props.htmlColor}
        />
        <rect
          x="14"
          y="13.999"
          width={props.fontSize === 'large' ? 2 : 1.3}
          height={props.fontSize === 'large' ? 2 : 1.3}
          rx="0.65"
          fill={props.htmlColor}
        />
        <rect
          x="4"
          y="13.999"
          width={props.fontSize === 'large' ? 2 : 1.3}
          height={props.fontSize === 'large' ? 2 : 1.3}
          rx="0.65"
          fill={props.htmlColor}
        />
        <rect
          x="9"
          y="10"
          width={props.fontSize === 'large' ? 2 : 1.3}
          height={props.fontSize === 'large' ? 2 : 1.3}
          rx="0.65"
          fill={props.htmlColor}
        />
        <rect
          x="14"
          y="10"
          width={props.fontSize === 'large' ? 2 : 1.3}
          height={props.fontSize === 'large' ? 2 : 1.3}
          rx="0.65"
          fill={props.htmlColor}
        />
      </svg>
    </SvgIcon>
  )
}
