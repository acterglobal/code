import React, { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { parseISO, addMinutes } from 'date-fns'
import { Form, Formik, FormikBag } from 'formik'
import { Button, Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import clsx from 'clsx'
import { getFollowers } from '@acter/lib/acter/get-followers'
import { getInterestIdsFromActer } from '@acter/lib/interests/get-interest-ids-from-acter'
import {
  ActivityTypeStep,
  ActivityTypeStepProps,
  ActivityTypeStepValues,
} from '@acter/components/activity/form/steps/type'
import {
  BasicsStep,
  BasicsStepValues,
} from '@acter/components/activity/form/steps/basics'
import {
  DetailsStep,
  DetailsStepProps,
  DetailsStepValues,
} from '@acter/components/activity/form/steps/details'
import {
  SettingsStep,
  SettingsStepProps,
  SettingsStepValues,
} from '@acter/components/activity/form/steps/settings'
import { StateFullModal as Modal } from '@acter/components/util/modal/statefull-modal'
import { Acter } from '@acter/schema'
import { ActerTypes, ActivityTypes } from '@acter/lib/constants'
import { getActivityTypeNameById } from '@acter/lib/activity/get-activity-type-name'
import { MeetingStep } from '@acter/components/activity/form/steps/meeting'
import { Stepper } from '@acter/components/util/stepper'
import { useActivityTypes } from '@acter/lib/activity-types/use-activity-types'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useUser } from '@acter/lib/user/use-user'

const getSteps = (activityType: ActivityTypes, acter?: Acter): FC[] => {
  const firstStep = acter?.id ? [] : [ActivityTypeStep]
  const activitySteps =
    activityType === ActivityTypes.MEETING
      ? [MeetingStep]
      : [BasicsStep, SettingsStep, DetailsStep]

  return [...firstStep, ...activitySteps]
}

export interface ActivityFormProps
  extends Omit<ActivityTypeStepProps, 'onClick'>,
    DetailsStepProps,
    Omit<SettingsStepProps, 'acters'> {
  /**
   * The ActivityType Acter for this
   */
  acter?: Acter

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
    DetailsStepValues,
    SettingsStepValues {
  startAt: Date
  endAt: Date
}

export const ActivityForm: FC<ActivityFormProps> = ({
  acter,
  interestTypes,
  onSubmit,
}) => {
  const router = useRouter()
  const classes = useStyles()
  const { activityTypes, loading } = useActivityTypes()

  const [activityType, setActivityType] = useState(null)
  const [heading, setHeading] = useState('')
  const [submitButtonLabel, setSubmitButtonLabel] = useState('Create')

  const steps = getSteps(activityType, acter)
  const [activeStep, setActiveStep] = useState(0)
  const totalSteps = steps.length
  const isLastStep = () =>
    activeStep + 1 === totalSteps || activityType === ActivityTypes.MEETING
  const handlePrev = () => setActiveStep(Math.max(activeStep - 1, 0))
  const handleNext = () => setActiveStep(Math.min(activeStep + 1, totalSteps))

  const onStepSubmit = (
    values: ActivityFormValues,
    formikBag: FormikBag<ActivityFormProps, ActivityFormValues>
  ) => {
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
      setActivityType(acter.Activity.ActivityType.name)
      setHeading(`Edit ${acter.Activity.ActivityType.name}`)
      setSubmitButtonLabel('Save')
    }
  }, [])

  useEffect(() => {
    if (activityType && !acter?.id) {
      setHeading(`Add ${activityType}`)
    }
  }, [activityType])

  useEffect(() => {
    if (steps[activeStep] === ActivityTypeStep) {
      setHeading(`Add Activity`)
    }
  }, [activeStep])

  if (loading) return <LoadingSpinner />
  if (!activityTypes) return null

  const handleOnClick = (activityTypeId: string) => {
    setActivityType(getActivityTypeNameById(activityTypeId, activityTypes))
    handleNext()
  }

  let startAt = null
  let endAt = null
  if (acter?.id) {
    //@ts-ignore
    startAt = parseISO(acter.Activity.startAt)
    //@ts-ignore
    endAt = parseISO(acter.Activity.endAt)

    const timeZoneOffSetMinutes = startAt.getTimezoneOffset()
    startAt = addMinutes(startAt, timeZoneOffSetMinutes)
    endAt = addMinutes(endAt, timeZoneOffSetMinutes)
  }
  const eventType = activityTypes.find(
    (type) => type.name === ActivityTypes.EVENT
  )
  const interestIds = getInterestIdsFromActer(acter)

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
    followerIds: acter?.Followers?.map(({ Follower: { id } }) => id) || [],
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

  const { user } = useUser()
  if (!user) return null

  // Fake an acter to determine potential followers when this is a new Activity
  const checkActer = acter
    ? acter
    : ({
        id: '',
        createdByUserId: user?.id,
        ActerType: {
          name: ActerTypes.ACTIVITY,
        },
        Activity: {
          organiserId: '',
        },
      } as Acter)
  const acters = getFollowers(user, checkActer)

  const handleModalClose = () => router.back()

  // TODO: Add validation

  return (
    <Modal handleModalClose={handleModalClose} heading={heading}>
      <Formik initialValues={initialValues} onSubmit={onStepSubmit}>
        {({ isSubmitting }) => {
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
                    <ActivityTypeStep onClick={handleOnClick} />
                  )}
                  <>
                    {steps[activeStep] === MeetingStep && <MeetingStep />}
                    {steps[activeStep] === BasicsStep && <BasicsStep />}
                    {steps[activeStep] == SettingsStep && (
                      <SettingsStep acters={acters} />
                    )}
                    {steps[activeStep] === DetailsStep && (
                      <DetailsStep interestTypes={interestTypes} />
                    )}
                  </>
                </Box>

                {steps[activeStep] !== ActivityTypeStep && (
                  <Box className={classes.footer}>
                    {steps[activeStep] !== MeetingStep && (
                      <Stepper activeStep={activeStep} steps={steps} />
                    )}

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
                        {isLastStep() || activityType === ActivityTypes.MEETING
                          ? submitButtonLabel
                          : 'Next'}
                      </Button>
                    </Box>
                  </Box>
                )}
              </Box>
            </Form>
          )
        }}
      </Formik>
    </Modal>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  const containerPadding = 4
  const containerHeight = `calc(100vh - ${theme.spacing(containerPadding)}px)`
  return createStyles({
    form: { height: containerHeight },
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: 690,
      height: containerHeight,
      paddingTop: theme.spacing(containerPadding),
      paddingLeft: theme.spacing(containerPadding),
      paddingRight: theme.spacing(containerPadding),
    },
    fields: {
      flexGrow: 1,
      justifyContent: 'center',
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
    },
    typeButtons: {
      display: 'flex',
      flexDirection: 'column',
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
  })
})
