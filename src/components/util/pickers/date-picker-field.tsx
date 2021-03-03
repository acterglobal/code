import React, { FC } from 'react'
import { KeyboardDatePicker, DatePicker } from 'formik-material-ui-pickers'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Field } from 'formik'
import { grey } from '@material-ui/core/colors'
import { AccessTime } from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) => ({
  datepicker: {
    color: grey[700],
  },
}))

export interface DatePickerProps {
  label?: string
  name: string
  placeholder?: string
  required?: boolean
}

export const DatePickerField: FC<DatePickerProps> = (props) => {
  const classes = useStyles()
  const { label, name, placeholder, required = true } = props

  return (
    <Field
      component={KeyboardDatePicker}
      autoOk
      disablePast
      // disableToolbar
      label={label}
      name={name}
      placeholder={placeholder}
      // variant="inline"
      inputVariant="outlined"
      format="DD/MM/yyyy"
      InputProps={{ className: classes.datepicker }}
      InputAdornmentProps={{ position: 'start' }}
      required={required}
    />
  )
}
