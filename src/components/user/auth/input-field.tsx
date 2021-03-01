import React, { FC } from 'react'
import { Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  fields: {
    height: theme.spacing(9),
    width: '100%',
  },
}))

export interface InputFieldProps {
  label: string
  name: string
  type?: string
}

export const InputField: FC<InputFieldProps> = (props) => {
  const { label, name, type = 'text' } = props
  const classes = useStyles()

  return (
    <Field
      className={classes.fields}
      component={TextField}
      label={label}
      name={name}
      type={type}
      size="small"
    />
  )
}
