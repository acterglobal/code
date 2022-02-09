import React, { FC } from 'react'

import {
  createStyles,
  Switch as MUISwitch,
  SwitchProps as MUISwitchProps,
  Theme,
  makeStyles,
} from '@material-ui/core'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'

export interface SwitchProps extends Omit<MUISwitchProps, 'onChange'> {
  onChange: (switchStatus: boolean) => void
  updating?: boolean
}

export const Switch: FC<SwitchProps> = (props) => {
  const { checked, size, onChange, updating = false } = props
  const classes = useStyles({ size })
  const handleChange = () => onChange(!checked)
  return updating ? (
    <LoadingSpinner size={18} thickness={4} />
  ) : (
    <MUISwitch {...props} classes={classes} onChange={handleChange} />
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 64,
      alignItems: 'center',
      '& > .MuiSwitch-switchBase': {
        paddingTop: 11,
        paddingLeft: 15,
        color: theme.palette.primary.main,
        '&.Mui-checked': {
          color: theme.colors.white,
        },
        '&.MuiSwitch-colorSecondary': {
          color: theme.colors.grey.main,
          '&.Mui-checked': {
            color: theme.colors.white,
            '& + .MuiSwitch-track': {
              backgroundColor: theme.colors.grey.main,
            },
          },
        },
      },
      '& .MuiSwitch-thumb': {
        width: 16,
        height: 16,
        boxShadow: 'none',
      },
      '& > .MuiSwitch-track': {
        height: 20,
        border: `1px solid ${theme.colors.grey.light}`,
        borderRadius: 22 / 2,
        opacity: 1,
        backgroundColor: theme.colors.white,
      },
      '& > .Mui-checked': {
        '&.MuiSwitch-switchBase': {
          paddingLeft: 13,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
        },
      },
      '&.MuiSwitch-sizeSmall': {
        width: 48,
        '& > .MuiSwitch-switchBase': {
          paddingTop: 6,
          paddingLeft: 10,
        },
        '& .MuiSwitch-thumb': {
          width: 12,
          height: 12,
          boxShadow: 'none',
        },
        '& > .MuiSwitch-track': {
          height: 16,
          borderRadius: 18 / 2,
        },
        '& > .Mui-checked': {
          '&.MuiSwitch-switchBase': {
            paddingLeft: 10,
          },
        },
      },
    },
  })
)
