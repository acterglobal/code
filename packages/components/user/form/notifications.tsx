import React, { FC } from 'react'
import { Form, Formik } from 'formik'
import { ProfileFormLayout } from '@acter/components/user/form/layout'
import {
  FormButtons,
  RadioGroup,
  SettingsRadio,
} from '@acter/components/util/forms'
import {
  ActerNotificationEmailFrequency,
  ActerNotificationSettings,
  User,
} from '@acter/schema'

export interface ProfileNotificationsFormValues {
  acterNotifySetting: ActerNotificationSettings
  acterNotifyEmailFrequency: ActerNotificationEmailFrequency
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
    acterNotifyEmailFrequency:
      ActerNotificationEmailFrequency[user.Acter.acterNotifyEmailFrequency],
  }
  return (
    <ProfileFormLayout>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <RadioGroup label="Notify me about" name="acterNotifySetting">
            <SettingsRadio
              label="All Activity"
              value={ActerNotificationSettings.ALL_ACTIVITY}
            />
            <SettingsRadio
              label="None"
              value={ActerNotificationSettings.NONE}
            />
          </RadioGroup>
          <RadioGroup label="Email me" name="acterNotifyEmailFrequency">
            <SettingsRadio
              label="Never"
              value={ActerNotificationEmailFrequency.NEVER}
            />
            <SettingsRadio
              label="Daily digest"
              value={ActerNotificationEmailFrequency.DAILY}
            />
            <SettingsRadio
              label="Immediately"
              value={ActerNotificationEmailFrequency.INSTANT}
            />
          </RadioGroup>
          <FormButtons align="right" hideUnlessDirty={true} />
        </Form>
      </Formik>
    </ProfileFormLayout>
  )
}
