import React from 'react'
import { Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { makeStyles, Theme } from '@material-ui/core/styles'
import * as Yup from 'yup'

const useStyles = makeStyles((theme: Theme) => ({
  textinput: {
    fontSize: '0.5rem',
    marginBottom: 20,
    color: theme.palette.secondary.light,
  },
}))

const BasiInformation = () => {
  const classes = useStyles()
  return (
    <>
      <Field
        className={classes.textinput}
        component={TextField}
        label="Name"
        name="name"
        required={true}
      />
      <Field
        className={classes.textinput}
        component={TextField}
        label="About"
        name="description"
        multiline
        rows={4}
      />
      <Field
        className={classes.textinput}
        component={TextField}
        label="Location"
        name="location"
        required={true}
      />
      <Field
        className={classes.textinput}
        component={TextField}
        label="Website link"
        name="url"
      />
    </>
  )
}

BasiInformation.label = 'Basic Information'
BasiInformation.initialValues = {
  name: '',
  description: '',
  location: '',
  url: '',
}
BasiInformation.validationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter the name'),
  location: Yup.string().required('Please enter locaiton'),
})

export default BasiInformation
