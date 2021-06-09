import React, { FC } from 'react'
import {
  createStyles,
  withStyles,
  Switch as MUISwitch,
  Theme,
} from '@material-ui/core'
import { Size } from 'src/constants/sizes'

const { SMALL, MEDIUM } = Size

export interface SwitchProps {
  name: string
  checked: boolean
  handleSwitchChange: (switchStatus: boolean) => void
  size?: Size
}

export const Switch: FC<SwitchProps> = ({
  name,
  checked,
  handleSwitchChange,
  size = MEDIUM,
}) => {
  const handleChange = () => handleSwitchChange(!checked)
  const StyledSwitch = getSwitch(size)
  return <StyledSwitch checked={checked} onChange={handleChange} name={name} />
}

const getSwitch = (size) => {
  switch (size) {
    case SMALL:
      return SmallSwitch
    case MEDIUM:
      return MediumSwitch
    default:
      return MediumSwitch
  }
}

const MediumSwitch = withStyles((theme: Theme) =>
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

const SmallSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  })
)(MUISwitch)
