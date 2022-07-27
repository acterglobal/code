import React, { FC } from 'react'

import { SvgIcon, SvgIconProps, useTheme } from '@material-ui/core'

export const EditIcon: FC<SvgIconProps> = (props) => {
  const theme = useTheme()
  return (
    <SvgIcon {...props}>
      <svg
        width="23"
        height="23"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.6422 7.875V14.3438C13.6422 14.5284 13.6056 14.7113 13.5346 14.8819C13.4636 15.0525 13.3595 15.2075 13.2282 15.3381C13.097 15.4687 12.9412 15.5723 12.7697 15.643C12.5983 15.7136 12.4145 15.75 12.2289 15.75H3.74922C3.37439 15.75 3.01492 15.6018 2.74988 15.3381C2.48484 15.0744 2.33594 14.7167 2.33594 14.3438V5.90625C2.33594 5.53329 2.48484 5.1756 2.74988 4.91188C3.01492 4.64816 3.37439 4.5 3.74922 4.5H9.66663"
          stroke={props.style?.color || theme.palette.secondary.light}
          strokeWidth={props.style?.fontWeight === 'bold' ? 1.6 : 1.5}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.3324 1.87208C16.2808 1.81563 16.2182 1.77019 16.1484 1.73849C16.0786 1.7068 16.0031 1.6895 15.9264 1.68766C15.8497 1.68582 15.7735 1.69947 15.7022 1.72779C15.631 1.7561 15.5663 1.79849 15.512 1.85239L15.0749 2.28517C15.0219 2.3379 14.9922 2.40941 14.9922 2.48397C14.9922 2.55853 15.0219 2.63004 15.0749 2.68278L15.4756 3.08075C15.5018 3.107 15.5331 3.12784 15.5674 3.14205C15.6018 3.15627 15.6387 3.16359 15.6759 3.16359C15.7131 3.16359 15.75 3.15627 15.7844 3.14205C15.8188 3.12784 15.85 3.107 15.8762 3.08075L16.3024 2.65888C16.5179 2.44477 16.538 2.09603 16.3324 1.87208Z"
          stroke={props.style?.color || theme.palette.secondary.light}
          strokeWidth={props.style?.fontWeight === 'bold' ? 1.6 : 0.7}
        />
        <path
          d="M14.1902 3.16414L7.81202 9.49929C7.77335 9.53762 7.74524 9.5852 7.73041 9.63746L7.43538 10.5118C7.42832 10.5355 7.42782 10.5607 7.43393 10.5847C7.44005 10.6087 7.45257 10.6306 7.47015 10.6481C7.48773 10.6656 7.50974 10.678 7.53384 10.6841C7.55795 10.6902 7.58326 10.6897 7.6071 10.6827L8.4851 10.3891C8.53762 10.3743 8.58544 10.3464 8.62395 10.3079L14.9908 3.96078C15.0497 3.90154 15.0827 3.82157 15.0827 3.73824C15.0827 3.6549 15.0497 3.57494 14.9908 3.5157L14.6392 3.16414C14.5796 3.10499 14.4989 3.07178 14.4147 3.07178C14.3305 3.07178 14.2498 3.10499 14.1902 3.16414Z"
          stroke={props.style?.color || theme.palette.secondary.light}
          strokeWidth={props.style?.fontWeight === 'bold' ? 1.6 : 0.7}
        />
      </svg>
    </SvgIcon>
  )
}