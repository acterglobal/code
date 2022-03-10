import React, { FC } from 'react'

import { SvgIcon, SvgIconProps } from '@mui/material'

export const LoginIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="100%"
        height="30"
        viewBox="0 4 31 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3497_31444)">
          <path
            d="M20.1836 0.142578H26.5071C27.3457 0.142578 28.1499 0.476514 28.7428 1.07092C29.3358 1.66533 29.6689 2.47153 29.6689 3.31215V25.4992C29.6689 26.3398 29.3358 27.146 28.7428 27.7404C28.1499 28.3348 27.3457 28.6687 26.5071 28.6687H20.1836"
            stroke="#D5D5D5"
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={2}
          />
          <path
            d="M14 22.5563L22 13.9637L14 5.37109"
            stroke="#D5D5D5"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M21 13.9629L0 13.9629"
            stroke="#D5D5D5"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_3497_31444">
            <rect width="30" height="29" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  )
}
