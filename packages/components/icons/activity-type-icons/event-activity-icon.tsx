import React, { FC } from 'react'

import { SvgIcon, SvgIconProps, useTheme } from '@material-ui/core'

export const EventActivityIcon: FC<SvgIconProps> = (props) => {
  const theme = useTheme()
  const iconColor = props.style?.color || theme.colors.activityTypes.event

  return (
    <SvgIcon {...props}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.7538 14.875C22.7538 13.1444 22.2406 11.4527 21.2791 10.0138C20.3177 8.57483 18.9511 7.45332 17.3523 6.79105C15.7534 6.12879 13.9941 5.95551 12.2967 6.29313C10.5994 6.63075 9.04032 7.46411 7.81661 8.68782C6.5929 9.91153 5.75954 11.4706 5.42192 13.168C5.0843 14.8653 5.25758 16.6246 5.91985 18.2235C6.58211 19.8223 7.70362 21.1889 9.14255 22.1504C10.5815 23.1118 12.2732 23.625 14.0038 23.625C16.3244 23.625 18.55 22.7031 20.191 21.0622C21.8319 19.4212 22.7538 17.1956 22.7538 14.875ZM7.77215 4.98805C7.31298 4.59513 6.72929 4.37789 6.12496 4.375L5.97239 4.37938C4.57512 4.46359 3.49997 5.6875 3.50379 7.16406C3.50379 7.88648 3.75864 8.22336 4.09879 8.6532C4.11992 8.68082 4.14661 8.70371 4.17713 8.72038C4.20765 8.73705 4.24132 8.74714 4.27598 8.75H4.32411C4.3512 8.74952 4.37783 8.7428 4.40191 8.73038C4.426 8.71796 4.44691 8.70016 4.46301 8.67836L7.78637 5.41406C7.81475 5.38536 7.83692 5.35113 7.8515 5.3135C7.86608 5.27587 7.87277 5.23564 7.87114 5.19531C7.86976 5.15582 7.86026 5.11703 7.84323 5.08137C7.8262 5.04571 7.802 5.01394 7.77215 4.98805V4.98805ZM20.2278 4.98805C20.6869 4.59513 21.2706 4.37789 21.875 4.375L22.0275 4.37938C23.4248 4.46359 24.5 5.6875 24.4961 7.16406C24.4961 7.88648 24.2413 8.22336 23.9011 8.6532C23.8799 8.68072 23.8532 8.7035 23.8227 8.72008C23.7922 8.73666 23.7586 8.74666 23.7239 8.74945H23.6758C23.6487 8.74897 23.6221 8.74225 23.598 8.72983C23.5739 8.71741 23.553 8.69961 23.5369 8.67781L20.2136 5.41406C20.1852 5.38536 20.163 5.35113 20.1484 5.3135C20.1338 5.27587 20.1272 5.23564 20.1288 5.19531C20.1302 5.15582 20.1397 5.11703 20.1567 5.08137C20.1737 5.04571 20.1979 5.01394 20.2278 4.98805V4.98805Z"
          stroke={iconColor}
          stroke-miterlimit="10"
        />
        <path
          d="M14.0039 8.75H14.5039C14.5039 8.53264 14.3635 8.34018 14.1565 8.27385C13.9495 8.20752 13.7234 8.28251 13.597 8.45938L14.0039 8.75ZM14.0039 14.875V15.375C14.28 15.375 14.5039 15.1511 14.5039 14.875H14.0039ZM9.62891 14.875L9.22204 14.5844C9.11318 14.7368 9.09862 14.9373 9.18432 15.1038C9.27003 15.2703 9.44161 15.375 9.62891 15.375V14.875ZM22.4004 23.9786C22.5956 24.1738 22.9122 24.1738 23.1075 23.9786C23.3027 23.7833 23.3027 23.4667 23.1075 23.2714L22.4004 23.9786ZM20.92 21.0839C20.7247 20.8887 20.4081 20.8887 20.2129 21.0839C20.0176 21.2792 20.0176 21.5958 20.2129 21.7911L20.92 21.0839ZM13.5039 8.75V14.875H14.5039V8.75H13.5039ZM14.0039 14.375H9.62891V15.375H14.0039V14.375ZM10.0358 15.1656L14.4108 9.04062L13.597 8.45938L9.22204 14.5844L10.0358 15.1656ZM23.1075 23.2714L20.92 21.0839L20.2129 21.7911L22.4004 23.9786L23.1075 23.2714ZM20.2129 21.7911L22.4004 23.9786L23.1075 23.2714L20.92 21.0839L20.2129 21.7911ZM5.60746 23.9786L7.79496 21.7911L7.08785 21.0839L4.90035 23.2714L5.60746 23.9786Z"
          fill="#2A2A2A"
          stroke={iconColor}
        />
      </svg>
    </SvgIcon>
  )
}
