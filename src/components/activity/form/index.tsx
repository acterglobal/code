import React, { FC, useState, useEffect } from 'react'
import moment from 'moment'
import { useRouter } from 'next/router'
import { Form, Formik } from 'formik'
import { Button, Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import { green, grey } from '@material-ui/core/colors'
import clsx from 'clsx'
import { flattenFollowing } from 'src/lib/acter/flatten-following'
import { Acter, ActivityType, InterestType, User } from '@schema'
import { ActivityTypeStep } from 'src/components/activity/form/type'
import { BasicsStep } from 'src/components/activity/form/basics'
import { DetailsStep } from 'src/components/activity/form/details'
import { InterestsStep } from 'src/components/activity/form/interests'
import { StateFullModal as Modal } from 'src/components/util/modal/statefull-modal'
import { ActivityTypes } from 'src/constants'

const getSteps = (acter?: Acter) => {
  if (acter?.id) {
    return [BasicsStep, DetailsStep, InterestsStep]
  }

  return [ActivityTypeStep, BasicsStep, DetailsStep, InterestsStep]
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

  //TODO: create a type for htis
  const initialValues = {
    organiserActerId:
      router?.query?.organiserActerId || acter.Activity.Organiser.id || '',
    name: '',
    description: '',
    location: '',
    url: '',
    interestIds: [],
    ...acter,
    ...acter?.Activity,
    activityTypeId: acter?.Activity.activityTypeId || eventType.id, // default activity type (Event) id
    isOnline: acter?.Activity.isOnline ? 'true' : 'false' || null,
    startDate: startAt,
    startTime: startAt,
    startAt: startAt,
    isAllDay: acter?.Activity.isAllDay ? true : false,
    endDate: endAt,
    endTime: endAt,
    endAt: endAt,
  }

  // TODO: Add validation

  const handleModalClose = () => router.back()

  return (
    <Modal handleModalClose={handleModalClose} heading={heading}>
      <Formik initialValues={initialValues} onSubmit={onStepSubmit}>
        {({ isSubmitting, setFieldValue, values }) => {
          const organisers = flattenFollowing(user.Acter)
          const selectedInterests =
            acter?.ActerInterests?.map(({ Interest: { id } }) => id) || []
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
                      setFieldValue={setFieldValue}
                      onClick={handleNext}
                    />
                  )}
                  {steps[activeStep] === BasicsStep && (
                    <BasicsStep
                      acters={organisers}
                      values={values}
                      activityTypes={activityTypes}
                    />
                  )}
                  {steps[activeStep] === DetailsStep && (
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
                  )}
                </Box>

                {steps[activeStep] !== ActivityTypeStep && (
                  <>
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
                  </>
                )}
              </Box>
            </Form>
          )
        }}
      </Formik>
    </Modal>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: { height: '100%' },
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: 690,
      height: '100%',
      borderTop: '1px solid',
      borderTopColor: grey[300],
      padding: 50,
    },
    fields: {
      flexGrow: 1,
      justifyContent: 'center',
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
)
