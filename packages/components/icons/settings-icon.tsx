import React, { FC } from 'react'

import { SvgIcon, SvgIconProps, useTheme } from '@mui/material'

export const SettingsIcon: FC<SvgIconProps> = (props) => {
  const theme = useTheme()
  return (
    <SvgIcon {...props}>
      <svg
        width="20"
        height="20"
        viewBox="0 -1 68 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.1206 13.9194C15.6455 15.5423 13.2454 18.0991 12.6136 18.4577C12.5425 18.4981 12.4599 18.49 12.3806 18.4701L7.32621 17.2066C6.85004 17.0875 6.35787 17.3316 6.16453 17.7828L2.30959 26.7776C2.12789 27.2016 2.25974 27.6948 2.62873 27.9715L7.6 31.7C7.85181 31.8889 8 32.1852 8 32.5V37.0261C8 37.3261 7.86537 37.6101 7.63324 37.8001L3.09322 41.5146C2.74323 41.801 2.62896 42.2866 2.81453 42.699L6.64505 51.2112C6.84885 51.6641 7.35416 51.8988 7.83169 51.7624L13.4342 50.1616C13.7834 50.0619 14.1593 50.1593 14.4161 50.4161L18.1464 54.1464C18.369 54.369 18.4738 54.6834 18.4293 54.995L17.618 60.6738C17.5497 61.1522 17.8333 61.6111 18.2917 61.7639L27.3462 64.7821C27.7399 64.9133 28.1736 64.7878 28.4364 64.4666L32.1999 59.8668C32.3899 59.6346 32.6739 59.5 32.9739 59.5H37.0194C37.3232 59.5 37.6105 59.6381 37.8002 59.8753L41.0048 63.8811C41.2949 64.2436 41.7964 64.3589 42.2156 64.1592L51.3285 59.8198C51.7271 59.63 51.954 59.2012 51.8869 58.7649L51.0771 53.5008C51.0286 53.186 51.1331 52.8669 51.3583 52.6417L54.6417 49.3583C54.8669 49.1331 55.186 49.0286 55.5008 49.0771L60.7146 49.8792C61.1744 49.9499 61.6223 49.6942 61.7951 49.2622L65.2422 40.6444C65.3972 40.2569 65.2953 39.8139 64.9864 39.5331L60.3273 35.2976C60.1189 35.108 60 34.8394 60 34.5576V29.9806C60 29.6768 60.1381 29.3895 60.3753 29.1998L64.3687 26.005C64.7369 25.7104 64.8493 25.1987 64.6385 24.7769L60.326 16.152C60.1317 15.7635 59.7089 15.5448 59.2795 15.6108L54.0008 16.4229C53.686 16.4714 53.3669 16.3669 53.1417 16.1417L49.8252 12.8252C49.6188 12.6188 49.5129 12.3325 49.5353 12.0414L49.9437 6.73237C49.9772 6.29659 49.7238 5.88952 49.318 5.7272L40.7225 2.28898C40.2976 2.11902 39.8115 2.25918 39.5423 2.62929L36.2995 7.08817C36.1113 7.34692 35.8107 7.5 35.4908 7.5H29.9806C29.6768 7.5 29.3895 7.36191 29.1998 7.1247L25.9843 3.10535C25.6992 2.74905 25.2092 2.63088 24.793 2.81813L16.305 6.63774C15.8451 6.84469 15.6113 7.36172 15.7596 7.84374L17.3333 12.9583C17.4367 13.2943 17.3571 13.6592 17.1206 13.9194Z"
          stroke={props.style?.color || theme.palette.secondary.light}
          strokeWidth={props.style?.fontWeight === 'bold' ? 8 : 3.5}
        />
        <circle
          cx="34"
          cy="33.5"
          r="14.5"
          stroke={props.style?.color || theme.palette.secondary.light}
          strokeWidth={props.style?.fontWeight === 'bold' ? 6 : 3.5}
        />
      </svg>
    </SvgIcon>
  )
}
