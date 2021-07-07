import React, { FC } from 'react'
import { Field, Form, Formik } from 'formik'
import { FormControl, FormLabel } from '@material-ui/core'
import { RadioGroup } from 'formik-material-ui'
import { ProfileFormLayout } from '@acter/components/user/form/layout'
import { FormButtons, SettingsRadio } from '@acter/components/util/forms'
import { ActerNotificationSettings, User } from '@acter/schema/types'

export interface ProfileNotificationsFormValues {
  acterNotifySetting: ActerNotificationSettings
}

export interface ProfileNotificationsFormProps {
  user: User
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void
}

export const ProfileNotificationsForm: FC<ProfileNotificationsFormProps> = ({
  user,
  onSubmit,
}) => {
  const initialValues: ProfileNotificationsFormValues = {
    acterNotifySetting:
      ActerNotificationSettings[user.Acter.acterNotifySetting],
  }
  return (
    <ProfileFormLayout>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend">Notify me about</FormLabel>
            <Field component={RadioGroup} name="acterNotifySetting">
              <SettingsRadio
                label="All Activity"
                value={ActerNotificationSettings.ALL_ACTIVITY}
              />
              <SettingsRadio
                label="None"
                value={ActerNotificationSettings.NONE}
              />
            </Field>
          </FormControl>
          <FormButtons align="right" hideUnlessDirty={true} />
        </Form>
      </Formik>
    </ProfileFormLayout>
  )
}
