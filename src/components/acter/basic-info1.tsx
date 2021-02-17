import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { TextField } from 'formik-material-ui'
import { Typography } from '@material-ui/core'
import * as Yup from 'yup'

const BasicInformation = (props) => {
  return (
    <>
      <Typography variant="h3" component="h1">
        Contact Information
      </Typography>
      <Field name="fName" label="F Name" component={TextField} />
      {/* <ErrorMessage name="firstName" /> */}
      <Field name="lName" label="L Name" component={TextField} />
    </>
  )
}

BasicInformation.label = 'Upload Images'
BasicInformation.initialValues = {
  fName: '',
  lName: '',
}
BasicInformation.validationSchema = Yup.object().shape({
  fName: Yup.string().required('Please enter your first name'),
  lName: Yup.string().required('Please enter your last name'),
})

export default BasicInformation
