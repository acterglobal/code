import React, { FC } from 'react'

import { SvgIcon, SvgIconProps, useTheme } from '@mui/material'

export const HomeIcon: FC<SvgIconProps> = (props) => {
  const theme = useTheme()
  return (
    <SvgIcon {...props}>
      <svg
        width="19"
        height="19"
        viewBox="-2 -2 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5 8.05882L9 1M9 1L1.5 8.05882V8.05882C1.32043 8.22783 1.44003 8.52941 1.68662 8.52941H2.43207C2.74573 8.52941 3 8.78368 3 9.09734V16C3 16.5523 3.44772 17 4 17H6C6.55228 17 7 16.5523 7 16V12.8235C7 12.2712 7.44772 11.8235 8 11.8235H9.5C10.0523 11.8235 10.5 12.2712 10.5 12.8235V16C10.5 16.5523 10.9477 17 11.5 17H14.5V17C14.7761 17 15 16.7761 15 16.5V9V9C15 8.7401 15.2107 8.52941 15.4706 8.52941H16.5V8.52941C16.6796 8.52941 16.7667 8.3098 16.6359 8.18673L9 1Z"
          stroke={props.style?.color || theme.colors.grey.main}
          strokeWidth={props.style?.fontWeight === 'bold' ? 1.6 : undefined}
        />
      </svg>
    </SvgIcon>
  )
}
