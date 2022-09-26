import React, { FC } from 'react'

import {
  Box,
  createStyles,
  InputLabel,
  makeStyles,
  Theme,
} from '@material-ui/core'

import { Form, Formik, FormikProps } from 'formik'

import { LanguagePicker } from '@acter/components/atoms/fields/language-picker'
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
  Language,
} from '@acter/schema'

export interface ProfileSettingsFormValues {
  acterNotifySetting: ActerNotificationSettings
  acterNotifyEmailFrequency: ActerNotificationEmailFrequency
  language: Language
}

export const ProfileSettings: FC = () => {
  const classes = useStyles()
  const { t } = useTranslation('notifications')
  const { user, fetching } = useUser()
  const [_, updateActer] = useUpdateActer(user?.Acter)

  if (fetching || !user) {
    return <>Loading...</>
  }

  const initialValues: ProfileSettingsFormValues = {
    acterNotifySetting:
      ActerNotificationSettings[user.Acter.acterNotifySetting],
    acterNotifyEmailFrequency:
      ActerNotificationEmailFrequency[user.Acter.acterNotifyEmailFrequency],
    language: user?.language as Language,
  }

  const handleSubmit = (values) => updateActer(values)

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({
        dirty,
        values,
        submitForm,
        resetForm,
      }: FormikProps<ProfileSettingsFormValues>) => {
        return (
          <Form
            onBlur={async () => {
              if (dirty) {
                await submitForm()
                resetForm({ values }) // <-- Changes dirty to false
              }
            }}
          >
            <Box className={classes.formButtons}>
              <FormButtons align="right" hideUnlessDirty={true} />
            </Box>

            <Box className={classes.container}>
              <RadioGroup label={t('notifyMeAbout')} name="acterNotifySetting">
                <SettingsRadio
                  label={t('allActivities')}
                  value={ActerNotificationSettings.ALL_ACTIVITY}
                />
                {/* <SettingsRadio
                  label='Mentions'
                  value={ActerNotificationSettings.MENTIONS}
                /> */}
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

              <Box className={classes.languagePicker}>
                <InputLabel>Language</InputLabel>
                <LanguagePicker size="small" variant="outlined" />
              </Box>
            </Box>
          </Form>
        )
      }}
    </Formik>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formButtons: {
      height: theme.spacing(8),
      width: '100%',
      backgroundColor: theme.palette.secondary.main,
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: '5%',
    },
    container: {
      margin: '40px auto',
      maxWidth: 800,
    },
    languagePicker: {
      marginTop: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  })
)
