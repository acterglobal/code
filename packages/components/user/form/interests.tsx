import React, { FC } from 'react'
import { Form as FormikForm, Formik } from 'formik'
import {
  InterestsAddSection,
  InterestAddSectionValues,
} from '@acter/components/acter/form/interests-add-section'
import { ProfileFormLayout } from '@acter/components/user/form/layout'
import { FormButtons } from '@acter/components/util/forms'
import { InterestType } from '@acter/schema'
import { useUser } from '@acter/lib/user/use-user'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'

export interface ProfileInterestsFormProps {
  interestTypes: InterestType[]
}

export const ProfileInterestsForm: FC<ProfileInterestsFormProps> = ({
  interestTypes,
}) => {
  const { user, loading } = useUser()
  const [updateActer] = useUpdateActer(user?.Acter)
  if (loading || !user) {
    return <>Loading...</>
  }

  const handleSubmit = (values, _actions) => updateActer(values)
  const initialValues: InterestAddSectionValues = {
    interestIds:
      user.Acter?.ActerInterests?.map(({ Interest }) => Interest.id) || [],
  }
  return (
    <ProfileFormLayout>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormikForm>
          <InterestsAddSection interestTypes={interestTypes} />
          <FormButtons align="right" hideUnlessDirty={true} />
        </FormikForm>
      </Formik>
    </ProfileFormLayout>
  )
}
