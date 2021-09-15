import React, { FC } from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { Field } from 'formik'
import { KeyboardDatePicker } from 'formik-material-ui-pickers'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    datepicker: {
      color: theme.palette.secondary.main,
    },
  })
)

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
      fullWidth
      disablePast
      label={label}
      name={name}
      placeholder={placeholder}
      inputVariant="outlined"
      format="dd/MM/yyyy"
      InputProps={{ className: classes.datepicker }}
      InputAdornmentProps={{ position: 'start' }}
      required={required}
    />
  )
}
