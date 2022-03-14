import React, { FC } from 'react'

import { SvgIcon, SvgIconProps } from '@mui/material'

import { grey } from '@acter/components/themes/colors'

export const ForumIcon: FC<SvgIconProps> = (props) => {
  const color = props.style?.color || grey.A100
  return (
    <SvgIcon {...props}>
      <svg viewBox="0 1 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.2832 10.2451C9.45266 12.3581 12.358 11.0375 12.358 11.0375C12.358 11.0375 13.8547 11.1255 13.9427 11.8298L13.6786 9.98097C14.8231 8.48428 16.584 5.22678 12.0939 3.37793"
          stroke={color}
          strokeWidth={props.style?.fontWeight === 'bold' ? 1.6 : 0.75}
        />
        <path
          d="M2.32162 8.13129L2.05749 10.2443C2.09051 9.98014 3.65021 8.8596 3.90644 8.92366C9.18888 10.2443 11.566 7.60305 11.566 5.49007C11.4339 5.49007 11.83 1.00052 6.28344 1C0.998421 0.999508 -0.320574 5.49007 2.32162 8.13129Z"
          stroke={color}
          strokeWidth={props.style?.fontWeight === 'bold' ? 1.6 : 0.75}
        />
      </svg>
    </SvgIcon>
  )
}
