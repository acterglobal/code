import React, { FC } from 'react'
import { KeyboardDatePicker } from 'formik-material-ui-pickers'
import { makeStyles } from '@material-ui/core/styles'
import { Field } from 'formik'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles({
  datepicker: {
    color: grey[700],
  },
})

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
      label={label}
      name={name}
      placeholder={placeholder}
      inputVariant="outlined"
      format="DD/MM/yyyy"
      InputProps={{ className: classes.datepicker }}
      InputAdornmentProps={{ position: 'start' }}
      required={required}
    />
  )
}
