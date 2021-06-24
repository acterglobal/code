import React, { FC } from 'react'

import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const ActerLogoText: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <title>Acter text logo original green</title>
    <text
      style={{ fontSize: '10px', fontFamily: 'Avenir-Light, Avenir' }}
      transform="translate(0 14)"
    >
      Acter
    </text>
  </SvgIcon>
)
