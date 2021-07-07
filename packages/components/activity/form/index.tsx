import React, { FC, useState, useEffect } from 'react'
import moment, { Moment } from 'moment'
import { useRouter } from 'next/router'
import { Form, Formik } from 'formik'
import { Button, Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import { green, grey } from '@material-ui/core/colors'
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
  BasicsStepProps,
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
import { Acter, User } from '@acter/schema/types'
import { ActerTypes, ActivityTypes } from '@acter/lib/constants'

const getSteps = (acter?: Acter) => {
  if (acter?.id) {
    return [BasicsStep, SettingsStep, DetailsStep]
  }

  return [ActivityTypeStep, BasicsStep, SettingsStep, DetailsStep]
}

export interface ActivityFormProps
  extends Omit<ActivityTypeStepProps, 'onClick'>,
    BasicsStepProps,
    DetailsStepProps,
    Omit<SettingsStepProps, 'acters'> {
  /**
   * The ActivityType Acter for this
   */
  acter?: Acter
  /**
   * The currently logged in user
   */
  user: User
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
  const interestIds = getInterestIdsFromActer(acter)

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

  // Fake an acter to determine potential followers when this is a new Activity
  const checkActer = acter
    ? acter
    : ({
        id: '',
        createdByUserId: user.id,
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
                    <ActivityTypeStep
                      activityTypes={activityTypes}
                      onClick={handleNext}
                    />
                  )}
                  {steps[activeStep] === BasicsStep && (
                    <BasicsStep activityTypes={activityTypes} />
                  )}
                  {steps[activeStep] == SettingsStep && (
                    <SettingsStep acters={acters} />
                  )}
                  {steps[activeStep] === DetailsStep && (
                    <DetailsStep interestTypes={interestTypes} />
                  )}
                </Box>

                {steps[activeStep] !== ActivityTypeStep && (
                  <Box className={classes.footer}>
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
      borderTop: '1px solid',
      borderTopColor: grey[300],
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
