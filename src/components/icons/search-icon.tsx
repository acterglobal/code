import React, { FC } from 'react'

import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const SearchIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <svg
      width="18"
      height="16"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6062 9C17.6062 13.6917 13.7796 17.5 9.05311 17.5C4.32658 17.5 0.5 13.6917 0.5 9C0.5 4.30835 4.32658 0.5 9.05311 0.5C13.7796 0.5 17.6062 4.30835 17.6062 9Z"
        stroke="#D5D5D5"
      />
      <rect
        width="2.00509"
        height="7.58208"
        rx="1"
        transform="matrix(0.658256 -0.752795 0.756617 0.653859 16.8555 16.1123)"
        fill="#D5D5D5"
      />
    </svg>
  </SvgIcon>
)
