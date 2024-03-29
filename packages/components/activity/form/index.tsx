import React, { FC, useState, useEffect } from 'react'

import { Button, Box, createStyles, makeStyles, Theme } from '@material-ui/core'

import clsx from 'clsx'
import { Form, Formik, FormikBag } from 'formik'

import {
  BasicsStep,
  BasicsStepValues,
} from '@acter/components/activity/form/steps/basics'
import {
  DetailsStep,
  DetailsStepValues,
} from '@acter/components/activity/form/steps/details'
import { MeetingStep } from '@acter/components/activity/form/steps/meeting'
import {
  SettingsStep,
  SettingsStepProps,
  SettingsStepValues,
} from '@acter/components/activity/form/steps/settings'
import {
  ActivityTypeStep,
  ActivityTypeStepProps,
  ActivityTypeStepValues,
} from '@acter/components/activity/form/steps/type'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { Stepper } from '@acter/components/util/stepper'
import { getActerTypeByName } from '@acter/lib/acter-types/get-acter-type-by-name'
import { useActerTypes } from '@acter/lib/acter-types/use-acter-types'
import { getPotentialFollowers } from '@acter/lib/acter/get-potential-followers'
import { useActer } from '@acter/lib/acter/use-acter'
import { useActivityTypes } from '@acter/lib/activity-types/use-activity-types'
import { getActivityTypeNameById } from '@acter/lib/activity/get-activity-type-name'
import { ActerTypes, ActivityTypes } from '@acter/lib/constants'
import { parseDateOrString } from '@acter/lib/datetime/parse-date-or-string'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { getInterestIdsFromActer } from '@acter/lib/interests/get-interest-ids-from-acter'
import { useUser } from '@acter/lib/user/use-user'
import { Acter } from '@acter/schema'

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
   * Whether the form is fetching/saving
   */
  fetching?: boolean
  /**
   * Whether the form is fetching/saving
   */
  setDrawerHeading?: (heading: string) => void
  /**
   * Organiser id
   */
  organiserActerId?: string
}

export interface ActivityFormValues
  extends ActivityTypeStepValues,
    BasicsStepValues,
    DetailsStepValues,
    SettingsStepValues {
  startAt: Date
  endAt: Date
  acterTypeId: string
  acterId: string
}

export const ActivityForm: FC<ActivityFormProps> = ({
  acter,
  onSubmit,
  setDrawerHeading,
  organiserActerId,
}) => {
  const { t } = useTranslation('common')
  const classes = useStyles()
  const { activityTypes, fetching: activityTypesLoading } = useActivityTypes()
  const { user } = useUser()
  const { acter: parentActer } = useActer()

  const { acterTypes, fetching: acterTypesLoading } = useActerTypes()
  const acterType = getActerTypeByName(acterTypes, ActerTypes.ACTIVITY)

  const [activityType, setActivityType] = useState(null)
  const [submitButtonLabel, setSubmitButtonLabel] = useState(t('form.create'))

  const steps = getSteps(activityType, acter)
  const [activeStep, setActiveStep] = useState(0)
  const totalSteps = steps.length
  const isLastStep = () =>
    activeStep + 1 === totalSteps || activityType === ActivityTypes.MEETING
  const handlePrev = () => setActiveStep(Math.max(activeStep - 1, 0))
  const handleNext = () => setActiveStep(Math.min(activeStep + 1, totalSteps))
  const handleSelectStep = (selectedStep: number) => setActiveStep(selectedStep)

  const onStepSubmit = async (
    values: ActivityFormValues,
    formikBag: FormikBag<ActivityFormProps, ActivityFormValues>
  ) => {
    const { setSubmitting, validateForm } = formikBag
    if (!isLastStep()) {
      setSubmitting(false)
      const errors = await validateForm()
      if (typeof errors === 'object' && Object.keys(errors).length > 0) return
      return handleNext()
    }
    // TODO: Final validation
    onSubmit(values)
  }

  useEffect(() => {
    if (acter?.id) {
      setActivityType(acter.Activity.ActivityType.name)
      setDrawerHeading(`${t('edit')} ${acter.Activity.ActivityType.name}`)
      setSubmitButtonLabel(t('save'))
    }
  }, [])

  useEffect(() => {
    if (activityType && !acter?.id) {
      setDrawerHeading(t(`form.add.${activityType}`))
    }
  }, [activityType])

  useEffect(() => {
    if (steps[activeStep] === ActivityTypeStep) {
      setDrawerHeading(t('form.add.activity'))
    }
  }, [activeStep])

  const handleOnClick = (activityTypeId: string) => {
    setActivityType(getActivityTypeNameById(activityTypeId, activityTypes))
    handleNext()
  }
  if (activityTypesLoading || acterTypesLoading) return <LoadingSpinner />
  if (!activityTypes || !acterTypes || !user || !parentActer) return null

  const eventType = activityTypes.find(
    (type) => type.name === ActivityTypes.EVENT
  )
  const interestIds = getInterestIdsFromActer(acter)

  const initialValues: ActivityFormValues = {
    organiserActerId: organiserActerId || acter?.Activity?.Organiser?.id || '',
    name: '',
    description: '',
    location: null,
    locationLat: null,
    locationLng: null,
    placeId: null,
    url: '',
    interestIds,
    followerIds: acter?.Followers?.map(({ Follower: { id } }) => id) || [
      parentActer?.id,
    ],
    ...acter,
    ...acter?.Activity,
    activityTypeId: acter?.Activity.activityTypeId || eventType.id, // default activity type (Event) id
    isOnline: acter?.Activity.isOnline || false,
    isAllDay: acter?.Activity.isAllDay ? true : false,
    acterTypeId: acterType?.id,
    acterId: acter?.id,
    startAt: parseDateOrString(acter?.Activity?.startAt) || null,
    endAt: parseDateOrString(acter?.Activity?.endAt) || null,
  }

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
  const acterFollowers = getPotentialFollowers(user, checkActer)

  const filteredActerFollowers = acterFollowers?.filter(
    (follower) => follower?.id !== parentActer?.id
  )

  const acters = [parentActer && parentActer, ...filteredActerFollowers]

  return (
    <>
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
                    {steps[activeStep] === MeetingStep && (
                      <MeetingStep acters={acters} />
                    )}
                    {steps[activeStep] === BasicsStep && <BasicsStep />}
                    {steps[activeStep] == SettingsStep && (
                      <SettingsStep acters={acters} />
                    )}
                    {steps[activeStep] === DetailsStep && <DetailsStep />}
                  </>
                </Box>

                {steps[activeStep] !== ActivityTypeStep && (
                  <Box className={classes.footer}>
                    {steps[activeStep] !== MeetingStep && (
                      <Stepper
                        activeStep={activeStep}
                        steps={steps}
                        handleSelectStep={handleSelectStep}
                      />
                    )}

                    <Box className={classes.buttonsContainer}>
                      <Button
                        variant="text"
                        color="primary"
                        className={classes.button}
                        disabled={activeStep === 0 || isSubmitting}
                        onClick={handlePrev}
                      >
                        {t('form.back')}
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
                          : t('form.next')}
                      </Button>
                    </Box>
                  </Box>
                )}
              </Box>
            </Form>
          )
        }}
      </Formik>
    </>
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
      zIndex: 1,
      overflow: 'scroll',
      'ms-overflow-style': 'none',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
        overflowY: 'scroll',
      },
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
    buttonsContainer: {
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
