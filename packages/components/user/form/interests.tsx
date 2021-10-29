import React, { FC } from 'react'

import { Form, Formik } from 'formik'

import {
  InterestsAddSection,
  InterestAddSectionValues,
} from '@acter/components/acter/form/interests-add-section'
import { ProfileFormLayout } from '@acter/components/user/form/layout'
import { FormButtons } from '@acter/components/util/forms'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { useUser } from '@acter/lib/user/use-user'

export const ProfileInterestsForm: FC = () => {
  const { user, fetching } = useUser()
  const [_, updateActer] = useUpdateActer(user?.Acter)
  if (fetching || !user) {
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
        <Form>
          <InterestsAddSection />
          <FormButtons align="right" hideUnlessDirty={true} />
        </Form>
      </Formik>
    </ProfileFormLayout>
  )
}
