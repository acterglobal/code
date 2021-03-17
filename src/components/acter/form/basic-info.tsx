import React from 'react'
import { Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { InputLabel, Box } from '@material-ui/core'
import { TextEditor } from 'src/components/util/text-editor'

import * as Yup from 'yup'

const useStyles = makeStyles((theme: Theme) => ({
  textinput: {
    width: '90%',
    fontSize: '0.5rem',
    marginBottom: 20,
    color: theme.palette.secondary.light,
  },
}))

export const BasicInformation = ({ setFieldValue, values }) => {
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
      <Box>
        <InputLabel>Description</InputLabel>
        <TextEditor
          width={535}
          height={150}
          initialValue={values.description}
          // @ts-ignore
          handleInputChange={(value) => setFieldValue('description', value)}
        />
      </Box>

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

// TODO: refacter below and add types to this component
BasicInformation.label = 'Basic Information'
BasicInformation.initialValues = {
  name: '',
  description: '',
  location: '',
  url: '',
}
BasicInformation.validationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter the name'),
  location: Yup.string().required('Please enter locaiton'),
})
