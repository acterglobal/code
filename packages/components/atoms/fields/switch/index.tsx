import React, { FC } from 'react'

import {
  Switch as MUISwitch,
  SwitchProps as MUISwitchProps,
  Theme,
} from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { blueGrey } from '@acter/components/themes/colors'

export interface SwitchProps extends Omit<MUISwitchProps, 'onChange'> {
  onChange: (switchStatus: boolean) => void
  updating?: boolean
}

export const Switch: FC<SwitchProps> = (props) => {
  const { checked = false, size, onChange, updating = false } = props
  const classes = useStyles({ size })
  const handleChange = () => onChange(!checked)
  return updating ? (
    <LoadingSpinner size={18} thickness={4} />
  ) : (
    <MUISwitch
      {...props}
      checked={checked}
      classes={classes}
      onChange={handleChange}
    />
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: blueGrey.A200,
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
      border: `1px solid ${theme.palette.theme.pallete.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
      height: 14,
    },
    checked: {},
    sizeSmall: {
      width: 20,
      height: 14,
      '& $thumb': {
        width: 10,
        height: 10,
      },
      '& $switchBase': {
        paddingTop: 1,
        paddingLeft: 2,
        '&$checked': {
          transform: 'translateX(6px)',
        },
      },
      '& $track': {
        height: 12,
        borderRadius: 16 / 2,
      },
    },
    colorSecondary: {
      '&$checked + $track': {
        borderColor: theme.palette.secondary.main,
        backgroundColor: theme.palette.secondary.main,
      },
    },
  })
)
