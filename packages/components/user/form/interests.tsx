import React, { FC } from 'react'
import { Form, Formik } from 'formik'
import {
  InterestsAddSection,
  InterestAddSectionValues,
} from '@acter/components/acter/form/interests-add-section'
import { ProfileFormLayout } from '@acter/components/user/form/layout'
import { FormButtons } from '@acter/components/util/forms'
import { InterestType, User } from '@schema'

export interface ProfileInterestsFormProps {
  user: User
  interestTypes: InterestType[]
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => any
}

export const ProfileInterestsForm: FC<ProfileInterestsFormProps> = ({
  user,
  interestTypes,
  onSubmit,
}) => {
  const handleSubmit = (values, _actions) => onSubmit(values)
  const initialValues: InterestAddSectionValues = {
    interestIds:
      user.Acter?.ActerInterests?.map(({ Interest }) => Interest.id) || [],
  }
  return (
    <ProfileFormLayout>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <InterestsAddSection interestTypes={interestTypes} />
          <FormButtons align="right" hideUnlessDirty={true} />
        </Form>
      </Formik>
    </ProfileFormLayout>
  )
}
