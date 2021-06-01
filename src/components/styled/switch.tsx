import React, { FC } from 'react'
import {
  createStyles,
  withStyles,
  Switch as MUISwitch,
  Theme,
} from '@material-ui/core'

export interface SwitchProps {
  name: string
  checked: boolean
  handleSwitchChange: (switchStatus: boolean) => void
}

export const Switch: FC<SwitchProps> = ({
  name,
  checked,
  handleSwitchChange,
}) => {
  const handleChange = () => handleSwitchChange(!checked)
  return <AntSwitch checked={checked} onChange={handleChange} name={name} />
}

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 48,
      height: 22,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2.5,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(24px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 18,
      height: 18,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 26 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  })
)(MUISwitch)
