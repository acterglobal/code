import React, { FC } from 'react'

import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const ActivitiesIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="2.5" width="18" height="15" rx="2.5" stroke="#C0C1C2" />
      <line x1="5.5" y1="5" x2="5.5" stroke="#C0C1C2" />
      <line x1="19" y1="7.5" y2="7.5" stroke="#C0C1C2" />
      <line x1="13.5" y1="5" x2="13.5" stroke="#C0C1C2" />
      <rect x="4" y="10" width="1.3" height="1.3" rx="0.65" fill="#C4C4C4" />
      <rect
        x="9"
        y="13.999"
        width="1.3"
        height="1.3"
        rx="0.65"
        fill="#C4C4C4"
      />
      <rect
        x="14"
        y="13.999"
        width="1.3"
        height="1.3"
        rx="0.65"
        fill="#C4C4C4"
      />
      <rect
        x="4"
        y="13.999"
        width="1.3"
        height="1.3"
        rx="0.65"
        fill="#C4C4C4"
      />
      <rect x="9" y="10" width="1.3" height="1.3" rx="0.65" fill="#C4C4C4" />
      <rect x="14" y="10" width="1.3" height="1.3" rx="0.65" fill="#C4C4C4" />
    </svg>
  </SvgIcon>
)
