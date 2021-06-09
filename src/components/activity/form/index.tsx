import React, { FC, useState, useEffect } from 'react'
import moment, { Moment } from 'moment'
import { useRouter } from 'next/router'
import { Form, Formik } from 'formik'
import { Button, Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import { green, grey } from '@material-ui/core/colors'
import clsx from 'clsx'
import { flattenFollowing } from 'src/lib/acter/flatten-following'
<<<<<<< HEAD
import { getInterestIdsFromActer } from 'src/lib/interests/get-interest-ids-from-acter'
import {
  ActivityTypeStep,
  ActivityTypeStepValues,
} from 'src/components/activity/form/steps/type'
import {
  BasicsStep,
  BasicsStepValues,
} from 'src/components/activity/form/steps/basics'
import {
  DetailsStep,
  DetailsStepValues,
} from 'src/components/activity/form/steps/details'
import { StateFullModal as Modal } from 'src/components/util/modal/statefull-modal'
import { Acter, ActivityType, InterestType, User } from '@schema'
=======
import { Acter, ActivityType, InterestType, User } from '@schema'
import { ActivityTypeStep } from 'src/components/activity/form/type'
import { BasicsStep } from 'src/components/activity/form/basics'
import { DetailsStep } from 'src/components/activity/form/details'
import { InterestsStep } from 'src/components/activity/form/interests'
import { StateFullModal as Modal } from 'src/components/util/modal/statefull-modal'
>>>>>>> e61e5c5 (Add step to the beginning of Activity create for picking type)
import { ActivityTypes } from 'src/constants'

const getSteps = (acter?: Acter) => {
  if (acter?.id) {
<<<<<<< HEAD
    return [BasicsStep, DetailsStep]
  }

  return [ActivityTypeStep, BasicsStep, DetailsStep]
=======
    return [BasicsStep, DetailsStep, InterestsStep]
  }

  return [ActivityTypeStep, BasicsStep, DetailsStep, InterestsStep]
>>>>>>> e61e5c5 (Add step to the beginning of Activity create for picking type)
}

export interface ActivityFormProps {
  /**
   * The ActivityType Acter for this
   */
  acter?: Acter
  /**
   * The currently logged in user
   */
  user: User
  /**
   * InterestTypes with Interests
   */
  interestTypes: InterestType[]
  /**
   * activityTypes with all Activity types
   */
  activityTypes: ActivityType[]
  /** Action to perform on submit
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (values: any) => any
  /**
   * Whether the form is loading/saving
   */
  loading?: boolean
}

export interface ActivityFormValues
  extends ActivityTypeStepValues,
    BasicsStepValues,
    DetailsStepValues {
  startAt: Moment
  endAt: Moment
}

export const ActivityForm: FC<ActivityFormProps> = ({
  acter,
  user,
  interestTypes,
  activityTypes,
  onSubmit,
}) => {
  const router = useRouter()
  const classes = useStyles()
  const [heading, setHeading] = useState('Add Activity')
  const steps = getSteps(acter)
  const [activeStep, setActiveStep] = useState(0)

  const totalSteps = steps.length
  const isLastStep = () => activeStep + 1 === totalSteps
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

  useEffect(() => {
    if (acter?.id) {
      setHeading('Edit Acitvity')
    }
  }, [])

  let startAt = null
  let endAt = null
  if (acter?.id) {
    startAt = moment(acter.Activity.startAt)
    endAt = moment(acter.Activity.endAt)
  }

  const eventType = activityTypes.find(
    (type) => type.name === ActivityTypes.EVENT
  )
<<<<<<< HEAD
  const interestIds = getInterestIdsFromActer(acter)
=======
>>>>>>> e61e5c5 (Add step to the beginning of Activity create for picking type)

  //TODO: create a type for htis
  const initialValues: ActivityFormValues = {
    organiserActerId:
      router?.query?.organiserActerId?.toString() ||
      acter?.Activity?.Organiser?.id ||
      '',
    name: '',
    description: '',
    location: '',
    url: '',
    interestIds,
    ...acter,
    ...acter?.Activity,
    activityTypeId: acter?.Activity.activityTypeId || eventType.id, // default activity type (Event) id
    isOnline: acter?.Activity.isOnline || false,
    startDate: startAt,
    startTime: startAt,
    startAt,
    isAllDay: acter?.Activity.isAllDay ? true : false,
    endDate: endAt,
    endTime: endAt,
    endAt,
  }

  // TODO: Add validation

  const handleModalClose = () => router.back()

  return (
    <Modal handleModalClose={handleModalClose} heading={heading}>
      <Formik initialValues={initialValues} onSubmit={onStepSubmit}>
<<<<<<< HEAD
        {({ isSubmitting }) => {
          const organisers = flattenFollowing(user.Acter)
=======
        {({ isSubmitting, setFieldValue, values }) => {
          const organisers = flattenFollowing(user.Acter)
          const selectedInterests =
            acter?.ActerInterests?.map(({ Interest: { id } }) => id) || []
>>>>>>> e61e5c5 (Add step to the beginning of Activity create for picking type)
          return (
            <Form className={classes.form}>
              <Box className={classes.container}>
                <Box
                  className={clsx(
                    classes.fields,
                    steps[activeStep] === ActivityTypeStep &&
                      classes.typeButtons
                  )}
                >
                  {steps[activeStep] === ActivityTypeStep && (
                    <ActivityTypeStep
                      activityTypes={activityTypes}
<<<<<<< HEAD
=======
                      setFieldValue={setFieldValue}
>>>>>>> e61e5c5 (Add step to the beginning of Activity create for picking type)
                      onClick={handleNext}
                    />
                  )}
                  {steps[activeStep] === BasicsStep && (
                    <BasicsStep
                      acters={organisers}
<<<<<<< HEAD
=======
                      values={values}
>>>>>>> e61e5c5 (Add step to the beginning of Activity create for picking type)
                      activityTypes={activityTypes}
                    />
                  )}
                  {steps[activeStep] === DetailsStep && (
<<<<<<< HEAD
                    <DetailsStep interestTypes={interestTypes} />
=======
                    <DetailsStep
                      setFieldValue={setFieldValue}
                      values={values}
                    />
                  )}
                  {steps[activeStep] === InterestsStep && (
                    <InterestsStep
                      interestTypes={interestTypes}
                      setFieldValue={setFieldValue}
                      initialValues={selectedInterests}
                    />
>>>>>>> e61e5c5 (Add step to the beginning of Activity create for picking type)
                  )}
                </Box>

                {steps[activeStep] !== ActivityTypeStep && (
<<<<<<< HEAD
                  <Box className={classes.footer}>
=======
                  <>
>>>>>>> e61e5c5 (Add step to the beginning of Activity create for picking type)
                    <Box className={classes.statusBars}>
                      {steps.map((step, index) => (
                        <Box
                          key={index}
                          className={clsx(
                            classes.bar,
                            activeStep >= index && classes.active
                          )}
                        ></Box>
                      ))}
                    </Box>
                    <Box className={classes.btnsContainer}>
                      <Button
                        variant="text"
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
                        {isLastStep() ? 'Submit' : 'Next'}
                      </Button>
                    </Box>
<<<<<<< HEAD
                  </Box>
=======
                  </>
>>>>>>> e61e5c5 (Add step to the beginning of Activity create for picking type)
                )}
              </Box>
            </Form>
          )
        }}
      </Formik>
    </Modal>
  )
}

<<<<<<< HEAD
const useStyles = makeStyles((theme: Theme) => {
  const containerPadding = 4
  const containerHeight = `calc(100vh - ${theme.spacing(containerPadding)}px)`
  return createStyles({
    form: { height: containerHeight },
=======
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: { height: '100%' },
>>>>>>> e61e5c5 (Add step to the beginning of Activity create for picking type)
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: 690,
<<<<<<< HEAD
      height: containerHeight,
=======
      height: '100%',
>>>>>>> e61e5c5 (Add step to the beginning of Activity create for picking type)
      borderTop: '1px solid',
      borderTopColor: grey[300],
      paddingTop: theme.spacing(containerPadding),
      paddingLeft: theme.spacing(containerPadding),
      paddingRight: theme.spacing(containerPadding),
    },
    fields: {
      flexGrow: 1,
      justifyContent: 'center',
<<<<<<< HEAD
      overflow: 'scroll',
      zIndex: 1,
    },
    footer: {
      flexGrow: 0,
      minHeight: 110,
      marginTop: theme.spacing(containerPadding),
      marginBottom: theme.spacing(containerPadding),
      backgroundColor: 'white',
      zIndex: 2,
=======
>>>>>>> e61e5c5 (Add step to the beginning of Activity create for picking type)
    },
    typeButtons: {
      display: 'flex',
      flexDirection: 'column',
    },
    controls: {
      // flexShrink: 0,
    },
    btnsContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    button: {
      borderRadius: theme.spacing(1),
      textTransform: 'none',
      width: '100%',
    },
    statusBars: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      marginBottom: 40,
    },
    bar: {
      height: 8,
      backgroundColor: grey[200],
      borderRadius: 10,
      margin: 5,
      minWidth: 130,
    },
    active: {
      backgroundColor: green[500],
    },
  })
})
