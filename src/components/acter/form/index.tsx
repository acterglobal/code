/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { FC, useState } from 'react'
import { Form, Formik } from 'formik'
import { Box, Step, StepLabel, Stepper } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { StateFullModal as Modal } from 'src/components/util/modal/statefull-modal'
import {
  BasicInformation,
  BasicInformationValues,
} from 'src/components/acter/form/basic-info'
import {
  ImageUploadSection,
  ImageUploadValues,
} from 'src/components/acter/form/image-upload-section'
import {
  InterestsAddSection,
  InterestAddSectionValues,
} from 'src/components/acter/form/interests-add-section'
import { Button, ButtonsContainer } from 'src/components/styled'
import { Acter, ActerType, InterestType } from '@schema'
import { useRouter } from 'next/router'
import { grey } from '@material-ui/core/colors'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'
import { getInterestIdsFromActer } from 'src/lib/interests/get-interest-ids-from-acter'

const stepLabels = ['Basic Information', 'Upload Images', 'Add Interests']
const steps = [BasicInformation, ImageUploadSection, InterestsAddSection]

export type FormValues = any

export type FormSetFieldValue = (
  field: string,
  value: any,
  shouldValidate?: boolean
) => void

export interface ActerFormProps {
  acter?: Acter
  acterType: ActerType
  interestTypes: InterestType[]
  onSubmit: (any) => any
}

export interface ActerFormValues
  extends BasicInformationValues,
    ImageUploadValues,
    InterestAddSectionValues {
  acterTypeId: string
  AvatarImage: string
  BannerImage: string
}

export const ActerForm: FC<ActerFormProps> = ({
  acter,
  acterType,
  interestTypes,
  onSubmit,
}) => {
  const classes = useStyles()
  const router = useRouter()
  const [activeStep, setActiveStep] = useState(0)
  const totalSteps = steps.length

  const isLastStep = () => activeStep + 1 === totalSteps
  const handlePrev = () => setActiveStep(Math.max(activeStep - 1, 0))
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

  const handleModalClose = () =>
    router.push(acter ? acterAsUrl(acter) : '/dashboard')

  const interestIds = getInterestIdsFromActer(acter)

  //TODO: create type for this
  const initialValues: ActerFormValues = {
    acterTypeId: acterType.id,
    name: '',
    description: '',
    location: '',
    url: '',
    AvatarImage: null,
    avatarUrl: '',
    BannerImage: null,
    bannerUrl: '',
    interestIds,
    ...acter,
  }

  return (
    <Modal handleModalClose={handleModalClose}>
      <Formik
        initialValues={initialValues}
        onSubmit={onStepSubmit}
        // validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
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
                {steps[activeStep] === BasicInformation && <BasicInformation />}
                {steps[activeStep] === ImageUploadSection && (
                  <ImageUploadSection />
                )}
                {steps[activeStep] === InterestsAddSection && (
                  <InterestsAddSection interestTypes={interestTypes} />
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: 650,
      minHeight: 600,
      borderTop: '1px solid',
      borderTopColor: grey[300],
      padding: 20,
      paddingBottom: 0,
      [theme.breakpoints.down('xs')]: {
        width: 300,
        height: 'auto',
      },
    },
    fields: {
      width: '100%',
      height: 470,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflowY: 'scroll',
    },
  })
)
