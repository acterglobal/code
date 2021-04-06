import React, { FC } from 'react'
import { KeyboardTimePicker } from 'formik-material-ui-pickers'
import { makeStyles } from '@material-ui/core/styles'
import { Field } from 'formik'
import { grey } from '@material-ui/core/colors'
import { AccessTime } from '@material-ui/icons'

const useStyles = makeStyles({
  timepicker: {
    color: grey[700],
  },
})

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
