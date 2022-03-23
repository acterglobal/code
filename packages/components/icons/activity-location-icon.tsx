import React, { FC } from 'react'

import { SvgIcon, SvgIconProps } from '@mui/material'

import { grey } from '@acter/components/themes/colors'

export const ActivityLocationIcon: FC<SvgIconProps> = (props) => {
  const iconColor = props.style?.color || grey.A100

  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={iconColor}
        strokeWidth={props.style?.fontWeight || '0.0001rem'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12ZM18 10.2C18 6.57 15.35 4 12 4C8.65 4 6 6.57 6 10.2C6 12.54 7.95 15.64 12 19.34C16.05 15.64 18 12.54 18 10.2ZM12 2C16.2 2 20 5.22 20 10.2C20 13.52 17.33 17.45 12 22C6.67 17.45 4 13.52 4 10.2C4 5.22 7.8 2 12 2Z"
          fill="#415C8C"
        />
      </svg>
    </SvgIcon>
  )
}
