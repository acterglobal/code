import React, { FC } from 'react'

import { Form, Formik } from 'formik'

import { ProfileFormLayout } from '@acter/components/user/form/layout'
import {
  FormButtons,
  RadioGroup,
  SettingsRadio,
} from '@acter/components/util/forms'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useUser } from '@acter/lib/user/use-user'
import {
  ActerNotificationEmailFrequency,
  ActerNotificationSettings,
} from '@acter/schema'

export interface ProfileNotificationsFormValues {
  acterNotifySetting: ActerNotificationSettings
  acterNotifyEmailFrequency: ActerNotificationEmailFrequency
}

export const ProfileNotificationsForm: FC = () => {
  const { t } = useTranslation('notifications')
  const { user, fetching } = useUser()
  const [_, updateActer] = useUpdateActer(user?.Acter)

  if (fetching || !user) {
    return <>Loading...</>
  }

  const initialValues: ProfileNotificationsFormValues = {
    acterNotifySetting:
      ActerNotificationSettings[user.Acter.acterNotifySetting],
    acterNotifyEmailFrequency:
      ActerNotificationEmailFrequency[user.Acter.acterNotifyEmailFrequency],
  }

  const handleSubmit = (values) => updateActer(values)

  return (
    <ProfileFormLayout>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <RadioGroup label={t('notifyMeAbout')} name="acterNotifySetting">
            <SettingsRadio
              label={t('allActivities')}
              value={ActerNotificationSettings.ALL_ACTIVITY}
            />
            <SettingsRadio
              label={t('none')}
              value={ActerNotificationSettings.NONE}
            />
          </RadioGroup>
          <RadioGroup label={t('emailMe')} name="acterNotifyEmailFrequency">
            <SettingsRadio
              label={t('never')}
              value={ActerNotificationEmailFrequency.NEVER}
            />
            <SettingsRadio
              label={t('dailyDigest')}
              value={ActerNotificationEmailFrequency.DAILY}
            />
            <SettingsRadio
              label={t('immediately')}
              value={ActerNotificationEmailFrequency.INSTANT}
            />
          </RadioGroup>
          <FormButtons align="right" hideUnlessDirty={true} />
        </Form>
      </Formik>
    </ProfileFormLayout>
  )
}
