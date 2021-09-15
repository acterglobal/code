import React, { FC } from 'react'

import {
  FormControlLabel,
  Radio,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'

export interface SettingsRadioProps {
  label: string
  value: string
}

export const SettingsRadio: FC<SettingsRadioProps> = ({ label, value }) => {
  const classes = useStyles()
  return (
    <FormControlLabel
      className={classes.radioLabel}
      control={<Radio />}
      label={label}
      labelPlacement="start"
      value={value}
    />
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    radioLabel: {
      justifyContent: 'space-between',
      color: theme.palette.secondary.main,
    },
  })
)
