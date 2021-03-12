import React, { FC, useState } from 'react'
import { Form, Formik } from 'formik'
import { Button, Box, Step, StepLabel, Stepper } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Modal } from 'src/components/util/modal'
import { BasicInformation } from 'src/components/acter/form/basic-info'
import { ImageUploadSection } from 'src/components/acter/form/image-upload-section'
import { InterestsAddSection } from 'src/components/acter/form/interests-add-section'
import { Acter, ActerType, InterestType } from '@schema'
import { initialValues } from 'src/lib/acter/handle-update-acter'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: 650,
    minHeight: 600,
    border: '1px solid gray',
    padding: 20,
    paddingBottom: 0,
    [theme.breakpoints.down('xs')]: {
      width: 300,
      height: 'auto',
    },
  },
  fields: {
    width: '100%',
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'scroll',
  },
  btnsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: theme.spacing(1),
    backgroundColor: 'white',
    zIndex: 10,
  },
  button: {
    borderRadius: 50,
    textTransform: 'none',
    width: 200,
  },
}))

const steps = [BasicInformation, ImageUploadSection, InterestsAddSection]
const getStepContent = (
  step: number,
  interestTypes: InterestType[],
  setFieldValue: any,
  acter: Partial<Acter>
) => {
  const selectedInterests =
    acter.ActerInterests?.map(({ Interest: { id } }) => id) || []
  switch (step) {
    case 0:
      return <BasicInformation />
    case 1:
      return (
        <ImageUploadSection
          setFieldValue={setFieldValue}
          initialValues={acter}
        />
      )
    case 2:
      return (
        <InterestsAddSection
          interestTypes={interestTypes}
          setFieldValue={setFieldValue}
          initialValues={selectedInterests}
        />
      )
  }
}

export interface FormikSetFieldType {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export interface ActerFormProps {
  acter: Acter
  acterType: ActerType
  interestTypes: InterestType[]
  onSubmit: (any) => any
}

// TODO: Add typing
export const ActerForm: FC<ActerFormProps> = ({
  acter,
  acterType,
  interestTypes,
  onSubmit,
}) => {
  const classes = useStyles()
  const router = useRouter()
  const [activeStep, setActiveStep] = useState(0)
  const totalSteps = steps.length - 1

  const isLastStep = () => activeStep === totalSteps
  const handlePrev = () => setActiveStep(Math.max(activeStep - 1, 0))
  const handleNext = () => setActiveStep(Math.min(activeStep + 1, totalSteps))

  const onStepSubmit = (values, formikBag) => {
    const { setSubmitting } = formikBag
    if (!isLastStep()) {
      setSubmitting(false)
      handleNext()
      return
    }
    // TODO: Final validation
    onSubmit(values)
  }

  const initialValues = steps.reduce(
    (values, { initialValues }) => ({
      ...values,
      ...initialValues,
      ...acter,
    }),
    {
      acterTypeId: acterType.id,
      selectedInterests: acter,
    }
  )

  // TODO: Add validation
  // const ActiveStep = steps[activeStep]
  // const validationSchema = ActiveStep.validationSchema

  return (
    <Modal handleModalClose={() => router.back()}>
      <Formik
        initialValues={initialValues}
        onSubmit={onStepSubmit}
        // validationSchema={validationSchema}
      >
        {({ isSubmitting, setFieldValue }) => (
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
                {getStepContent(
                  activeStep,
                  interestTypes,
                  setFieldValue,
                  initialValues
                )}
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
    </Modal>
  )
}
