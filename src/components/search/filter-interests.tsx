import React, { FC } from 'react'
import { Form, Formik } from 'formik'
import { Box, Step, StepLabel, Stepper } from '@material-ui/core'
import {
  InterestsAddSection,
  InterestsAddSectionProps,
} from 'src/components/acter/form/interests-add-section'

type FilterInterestsProps = InterestsAddSectionProps

export const FilterInterests: FC<FilterInterestsProps> = ({
  interestTypes,
}) => {
  const initialValues = {}

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onStepSubmit}
      // validationSchema={validationSchema}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form>
          <InterestsAddSection
            interestTypes={interestTypes}
            setFieldValue={setFieldValue}
            initialValues={selectedInterests}
          />
        </Form>
      )}
    </Formik>
  )
}
