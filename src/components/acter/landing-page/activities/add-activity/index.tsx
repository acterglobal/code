import React, { FC, useState } from 'react'
import { Form, Formik } from 'formik'
import { Button, Box, Step, StepLabel, Stepper } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { BasicInformation } from 'src/components/acter/form/basic-info'
import { ImageUploadSection } from 'src/components/acter/form/image-upload-section'
import { InterestsAddSection } from 'src/components/acter/form/interests-add-section'
import { InterestType } from '@generated/type-graphql'
import { green, grey } from '@material-ui/core/colors'
import clsx from 'clsx'
import { Modal } from 'src/components/util/modal/modal'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minWidth: 500,
    minHeight: 500,
    border: '1px solid gray',
    padding: 50,
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
    borderRadius: 5,
    textTransform: 'none',
    width: 200,
  },
  statusBars: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 50,
  },
  bar: {
    minWidth: 130,
    height: 8,
    backgroundColor: grey[200],
    borderRadius: 10,
    margin: 5,
  },
  active: {
    backgroundColor: green[500],
  },
}))

const steps = [BasicInformation, ImageUploadSection, InterestsAddSection]
const getStepContent = (
  step: number,
  interestTypes: InterestType[],
  setFieldValue: any
) => {
  switch (step) {
    case 1:
      return <BasicInformation />
    case 2:
      return <ImageUploadSection setFieldValue={setFieldValue} />
    case 3:
      return (
        <InterestsAddSection
          interestTypes={interestTypes}
          setFieldValue={setFieldValue}
        />
      )
  }
}

export interface FormikSetFieldType {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export interface ActerFormProps {
  // acterType: ActerType
  interestTypes: InterestType[]
  onSubmit: (any) => any
}

// TODO: Add typing
export const AddActivity: FC<ActerFormProps> = ({
  // acterType,
  interestTypes,
  onSubmit,
}) => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(1)
  const totalSteps = steps.length

  const isLastStep = () => activeStep === totalSteps
  const handlePrev = () => setActiveStep(Math.max(activeStep - 1, 1))
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

  const initialValues = {
    name: '',
    description: '',
    location: '',
    url: '',
    interestIds: [],
    AvatarImage: null,
    BannerImage: null,
  }

  // TODO: Add validation
  // const ActiveStep = steps[activeStep]
  // const validationSchema = ActiveStep.validationSchema

  return (
    <Modal>
      <Formik
        initialValues={initialValues}
        onSubmit={onStepSubmit}
        // validationSchema={validationSchema}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Box className={classes.container}>
            <Form>
              <Box className={classes.fields}>
                {getStepContent(activeStep, interestTypes, setFieldValue)}
              </Box>

              <Box className={classes.statusBars}>
                {steps.map((step, index) => (
                  <Box
                    key={index}
                    className={clsx(
                      classes.bar,
                      activeStep - 1 >= index && classes.active
                    )}
                  ></Box>
                ))}
              </Box>

              <Box className={classes.btnsContainer}>
                <Button
                  variant="text"
                  color="primary"
                  className={classes.button}
                  disabled={activeStep === 1 || isSubmitting}
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
                  {isLastStep() ? 'Submit' : 'Next'}
                </Button>
              </Box>
            </Form>
          </Box>
        )}
      </Formik>
    </Modal>
  )
}
