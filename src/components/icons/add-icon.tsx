import React, { FC } from 'react'

import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const AddIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <svg
      width="22"
      height="22"
      viewBox="-2 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle r="16" transform="matrix(1 0 0 -1 16.5 16.5)" stroke="#D5D5D5" />
      <path
        d="M19.9784 16.6368H17.0024V19.5488H15.9944V16.6368H13.0184V15.6928H15.9944V12.7648H17.0024V15.6928H19.9784V16.6368Z"
        fill="#D5D5D5"
      />
    </svg>
  </SvgIcon>
)
