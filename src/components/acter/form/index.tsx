/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { FC, useState } from 'react'
import { Form, Formik } from 'formik'
import { Box, Step, StepLabel, Stepper } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Modal } from 'src/components/util/modal'
import { BasicInformation } from 'src/components/acter/form/basic-info'
import { ImageUploadSection } from 'src/components/acter/form/image-upload-section'
import { InterestsAddSection } from 'src/components/acter/form/interests-add-section'
import { Button, ButtonsContainer } from 'src/components/styled'
import { Acter, ActerType, InterestType } from '@schema'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
)

const stepLabels = ['Basic Information', 'Upload Images', 'Add Interests']
const steps = [BasicInformation, ImageUploadSection, InterestsAddSection]

const getStepContent = (
  step: number,
  interestTypes: InterestType[],
  setFieldValue: FormSetFieldValue,
  acter: Partial<Acter>,
  values: FormValues
) => {
  const selectedInterests =
    acter.ActerInterests?.map(({ Interest: { id } }) => id) || []
  switch (step) {
    case 1:
      return <BasicInformation values={values} setFieldValue={setFieldValue} />
    case 2:
      return (
        <ImageUploadSection
          setFieldValue={setFieldValue}
          initialValues={acter}
        />
      )
    case 3:
      return (
        <InterestsAddSection
          interestTypes={interestTypes}
          setFieldValue={setFieldValue}
          initialValues={selectedInterests}
        />
      )
  }
}

export type FormValues = any

export type FormSetFieldValue = (
  field: string,
  value: any,
  shouldValidate?: boolean
) => void

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
  const [activeStep, setActiveStep] = useState(1)
  const totalSteps = steps.length

  const isLastStep = () => activeStep === totalSteps
  const handlePrev = () => setActiveStep(Math.max(activeStep - 1, 1))
  const handleNext = () => setActiveStep(Math.min(activeStep + 1, totalSteps))

  const onStepSubmit = async (values, { setSubmitting }) => {
    if (!isLastStep()) {
      setSubmitting(false)
      handleNext()
      return
    }
    // TODO: Final validation
    try {
      return onSubmit(values)
    } catch (err) {
      setSubmitting(false)
    }
  }

  const initialValues = {
    acterTypeId: acterType.id,
    selectedInterests: acter,
    name: '',
    description: '',
    location: '',
    url: '',
    AvatarImage: null,
    BannerImage: null,
    interestIds: [],
    ...acter,
  }

  return (
    <Modal handleModalClose={() => router.back()}>
      <Formik
        initialValues={initialValues}
        onSubmit={onStepSubmit}
        // validationSchema={validationSchema}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Box className={classes.container}>
            <Form>
              <Stepper alternativeLabel activeStep={activeStep}>
                {stepLabels.map((label, index) => (
                  <Step key={index}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              <Box className={classes.fields}>
                {getStepContent(
                  activeStep,
                  interestTypes,
                  setFieldValue,
                  initialValues,
                  values
                )}
              </Box>

              <ButtonsContainer>
                <Button
                  variant="outlined"
                  color="primary"
                  disabled={activeStep === 1 || isSubmitting}
                  onClick={handlePrev}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ color: 'white' }}
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isLastStep() ? 'Submit' : 'Continue'}
                </Button>
              </ButtonsContainer>
            </Form>
          </Box>
        )}
      </Formik>
    </Modal>
  )
}
