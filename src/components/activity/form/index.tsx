import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { Form, Formik } from 'formik'
import { Button, Box, Grid, makeStyles, Theme } from '@material-ui/core'
import { green, grey } from '@material-ui/core/colors'
import clsx from 'clsx'
import { flattenFollowing } from 'src/lib/acter/flatten-following'
import { InterestType, User } from '@generated/type-graphql'
import { Step1 } from 'src/components/activity/form/step1'
import { Step2 } from 'src/components/activity/form/step2'
import { Step3 } from 'src/components/activity/form/step3'
import { Modal } from 'src/components/util/modal/modal'
import * as Yup from 'yup'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minWidth: 500,
    minHeight: 500,
    border: '1px solid gray',
    padding: 50,
  },
  fields: {
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
    marginBottom: 50,
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
}))

const steps = [Step1, Step2, Step3]
const getStepContent = (
  step: number,
  user: User,
  interestTypes: InterestType[],
  setFieldValue: any,
  values: any
) => {
  const organisers = flattenFollowing(user.Acter)
  switch (step) {
    case 1:
      return <Step1 acters={organisers} user={user} />
    case 2:
      return <Step2 setFieldValue={setFieldValue} values={values} />
    case 3:
      return (
        <Step3 interestTypes={interestTypes} setFieldValue={setFieldValue} />
      )
  }
}

export interface FormikSetFieldType {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export interface ActivityFormProps {
  /**
   * The currently logged in user
   */
  user: User
  /**
   * InterestTypes with Interests
   */
  interestTypes: InterestType[]
  onSubmit: (any) => any
}

// TODO: Add typing
export const ActivityForm: FC<ActivityFormProps> = ({
  user,
  interestTypes,
  onSubmit,
}) => {
  const router = useRouter()
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
    organiserActerId: router?.query?.organiserActerId || '',
    name: '',
    startDate: null,
    startTime: null,
    startAt: null,
    endDate: null,
    endTime: null,
    endAt: null,
    isOnline: null,
    description: '',
    location: '',
    url: '',
    interestIds: [],
  }

  // TODO: Add validation
  // const validationSchema = Yup.object().shape({
  //   name: Yup.string().required('Please enter activity name'),
  //   startDate: Yup.date().required('Please enter start date'),
  // })

  return (
    <Modal>
      <Formik
        initialValues={initialValues}
        onSubmit={onStepSubmit}
        // validationSchema={validationSchema}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <Box className={classes.container}>
              <Box className={classes.fields}>
                {getStepContent(
                  activeStep,
                  user,
                  interestTypes,
                  setFieldValue,
                  values
                )}
              </Box>

              {/* <Box className={classes.controls}> */}
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
            </Box>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}
