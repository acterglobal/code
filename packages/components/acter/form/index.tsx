/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react'

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

import { Form, Formik } from 'formik'

import {
  BasicInformation,
  BasicInformationValues,
} from '@acter/components/acter/form/basic-info'
import {
  ImageUploadSection,
  ImageUploadValues,
} from '@acter/components/acter/form/image-upload-section'
import {
  InterestsAddSection,
  InterestAddSectionValues,
} from '@acter/components/acter/form/interests-add-section'
import { Button, ButtonsContainer } from '@acter/components/styled'
import { Stepper } from '@acter/components/util/stepper'
import { getInterestIdsFromActer } from '@acter/lib/interests/get-interest-ids-from-acter'
import { Acter, ActerType } from '@acter/schema'

const steps = [BasicInformation, ImageUploadSection, InterestsAddSection]

export type FormValues = any

export type FormSetFieldValue = (
  field: string,
  value: any,
  shouldValidate?: boolean
) => void

export interface ActerFormProps {
  acter?: Acter
  acterType?: ActerType
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
  onSubmit,
}) => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const totalSteps = steps.length

  const isLastStep = () => activeStep + 1 === totalSteps
  const handlePrev = () => setActiveStep(Math.max(activeStep - 1, 0))
  const handleNext = () => setActiveStep(Math.min(activeStep + 1, totalSteps))
  const handleSelectStep = (selectedStep: number) => setActiveStep(selectedStep)

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

  const interestIds = getInterestIdsFromActer(acter)

  //TODO: create type for this
  const initialValues: ActerFormValues = {
    acterTypeId: acter?.ActerType.id || acterType?.id,
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
    <Formik initialValues={initialValues} onSubmit={onStepSubmit}>
      {({ isSubmitting }) => (
        <Box className={classes.container}>
          <Form>
            <Box className={classes.fields}>
              {steps[activeStep] === BasicInformation && <BasicInformation />}
              {steps[activeStep] === ImageUploadSection && (
                <ImageUploadSection />
              )}
              {steps[activeStep] === InterestsAddSection && (
                <InterestsAddSection />
              )}
            </Box>

            <Box className={classes.stepBars}>
              <Stepper
                activeStep={activeStep}
                steps={steps}
                handleSelectStep={handleSelectStep}
              />
            </Box>

            <ButtonsContainer>
              <Button
                variant="outlined"
                color="primary"
                disabled={activeStep === 0 || isSubmitting}
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
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: 650,
      minHeight: 600,
      padding: 20,
      paddingBottom: 0,
      [theme.breakpoints.down('xs')]: {
        width: 300,
        height: 'auto',
      },
    },
    fields: {
      width: '100%',
      marginTop: theme.spacing(10),
      height: 470,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflowY: 'scroll',
    },
    stepBars: {
      width: '90%',
      margin: 'auto',
    },
  })
)
