import React, { FC, useState } from 'react'
import { Form, Formik } from 'formik'
import { Button, Box, Step, StepLabel, Stepper } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { BasicInformation } from 'src/components/acter/basic-info'
import { ImageUploadSection } from 'src/components/acter/image-upload-section'
import { InterestsAddSection } from 'src/components/acter/interests-add-section'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: 500,
    height: 500,
    border: '1px solid gray',
    padding: 20,
  },
  fields: {
    height: 350,
    display: 'flex',
    flexDirection: 'column',
  },
  btnsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    // bottom: 5,
  },
  button: {
    borderRadius: 50,
    textTransform: 'none',
    width: 200,
  },
}))

const steps = [BasicInformation, ImageUploadSection, InterestsAddSection]
const getStepContent = (step: number, setFieldValue: any) => {
  switch (step) {
    case 0:
      return <BasicInformation />
    case 1:
      return <ImageUploadSection setFieldValue={setFieldValue} />
    case 2:
      return <InterestsAddSection setFieldValue={setFieldValue} />
  }
}

export interface FormikSetFieldType {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

// TODO: Add typing
export const Wizard = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const totalSteps = steps.length - 1

  const isLastStep = () => activeStep === totalSteps
  const handlePrev = () => setActiveStep(Math.max(activeStep - 1, 0))
  const handleNext = () => setActiveStep(Math.min(activeStep + 1, totalSteps))

  const onSubmit = (values, formikBag) => {
    console.log('VALUES :', values)
    const { setSubmitting, setTouched } = formikBag
    if (!isLastStep()) {
      // setTouched({})
      setSubmitting(false)
      handleNext()
      return
    }
    console.log(values)
  }

  const initialValues = steps.reduce(
    (values, { initialValues }) => ({
      ...values,
      ...initialValues,
    }),
    {}
  )

  // TODO: Add validation
  const ActiveStep = steps[activeStep]
  // const validationSchema = ActiveStep.validationSchema

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      // validationSchema={validationSchema}
    >
      {({ isSubmitting, touched, setFieldValue }) => (
        <Box className={classes.container}>
          <Form>
            <Stepper alternativeLabel activeStep={activeStep}>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepLabel>{step.label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Box className={classes.fields}>
              {getStepContent(activeStep, setFieldValue)}
            </Box>

            <Box className={classes.btnsContainer}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                disabled={activeStep === 0 || isSubmitting}
                onClick={handlePrev}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ color: 'white' }}
                className={classes.button}
                disabled={isSubmitting}
                type="submit"
              >
                {isLastStep() ? 'Submit' : 'Continue'}
              </Button>
            </Box>
          </Form>
        </Box>
      )}
    </Formik>
  )
}
