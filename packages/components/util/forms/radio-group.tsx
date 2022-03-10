import React, { FC } from 'react'

import { FormControl, FormLabel, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { Field } from 'formik'
import { RadioGroup as FormikRadioGroup } from 'formik-material-ui'

export interface RadioGroupProps {
  /**
   * Label to be used for entire radio group
   */
  label: string
  /**
   * Name of the field on values
   */
  name: string
}

export const RadioGroup: FC<RadioGroupProps> = ({ label, name, children }) => {
  const classes = useStyles()

  return (
    <FormControl component="fieldset" fullWidth className={classes.control}>
      <FormLabel component="legend">{label}</FormLabel>
      <Field component={FormikRadioGroup} name={name}>
        {children}
      </Field>
    </FormControl>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    control: {
      marginBottom: theme.spacing(2),
    },
  })
)
