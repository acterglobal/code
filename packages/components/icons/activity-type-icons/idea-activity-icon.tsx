import React, { FC } from 'react'

import { SvgIcon, SvgIconProps } from '@mui/material'

export const IdeaActivityIcon: FC<SvgIconProps> = (props) => {
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
          d="M16.9167 21V19.6875C16.9167 18.1016 18.8332 16.6015 20.0764 15.5313C21.8288 14.0235 22.75 11.9979 22.75 9.62503C22.75 5.25003 18.8775 1.75003 14 1.75003C12.8501 1.74714 11.7108 1.94887 10.6478 2.3436C9.58471 2.73833 8.61884 3.31829 7.80569 4.05013C6.99254 4.78196 6.34815 5.65124 5.90955 6.60799C5.47096 7.56473 5.24683 8.59006 5.25003 9.62503C5.25003 11.9132 6.21071 14.076 7.92364 15.5313C9.16018 16.5818 11.0834 18.0852 11.0834 19.6875V21"
          stroke={props.htmlColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.25 26.25H15.75"
          stroke={props.htmlColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.375 23.625H16.625"
          stroke={props.htmlColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 21V14"
          stroke={props.htmlColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.0781 13.125C16.0781 13.125 14.9018 14 14 14C13.0982 14 11.9219 13.125 11.9219 13.125"
          stroke={props.htmlColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  )
}
