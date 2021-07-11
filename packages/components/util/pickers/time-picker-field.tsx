import React, { FC } from 'react'
import { KeyboardTimePicker } from 'formik-material-ui-pickers'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Field } from 'formik'
import { AccessTime } from '@material-ui/icons'

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
    />
  )
}
