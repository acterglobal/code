import React, { FC } from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { AccessTime } from '@material-ui/icons'

import { Field } from 'formik'
import { KeyboardTimePicker } from 'formik-material-ui-pickers'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    timepicker: {
      color: theme.palette.secondary.main,
    },
  })
)

export interface TimePickerProps {
  label?: string
  placeholder?: string
  name: string
  required?: boolean
}

export const TimePickerField: FC<TimePickerProps> = (props) => {
  const classes = useStyles()
  const { label, name, placeholder, required = true } = props

  return (
    <Field
      component={KeyboardTimePicker}
      fullWidth
      label={label}
      name={name}
      placeholder={placeholder}
      mask="__:__"
      ampm={false}
      keyboardIcon={<AccessTime />}
      inputVariant="outlined"
      InputAdornmentProps={{ position: 'start' }}
      InputProps={{ className: classes.timepicker }}
      required={required}
      disabledKeyboardNavigation
    />
  )
}
