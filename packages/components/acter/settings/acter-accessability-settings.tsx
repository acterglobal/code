import React, { FC } from 'react'

import {
  FormControl,
  FormLabel,
  RadioGroup,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'

import { Formik, Form } from 'formik'

import { FormButtons, SettingsRadio } from '@acter/components/util/forms'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import {
  Acter,
  ActerPrivacySettings,
  ActerWhoCanJoinSettings,
} from '@acter/schema'

interface ActerAccessabilitySettingsInitialValues {
  acterPrivacySetting: ActerPrivacySettings
  acterWhoCanJoinSetting: ActerWhoCanJoinSettings
}

export interface ActerAccessabilitySettingsProps {
  /**
   * Callback for updating Acter privacy settings
   */
  onSettingsChange: (acter: Acter) => void
  /**
   * Whether we're in the middle of updating
   */
  fetching: boolean
}

export const ActerAccessabilitySettings: FC<ActerAccessabilitySettingsProps> = ({
  onSettingsChange,
}) => {
  const { acter, fetching } = useActer()
  const classes = useStyles()
  if (fetching) return <LoadingSpinner />
  if (!acter) return null

  const initialValues: ActerAccessabilitySettingsInitialValues = {
    acterPrivacySetting: ActerPrivacySettings[acter?.acterPrivacySetting],
    acterWhoCanJoinSetting:
      ActerWhoCanJoinSettings[acter?.acterWhoCanJoinSetting],
  }
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={(values) => onSettingsChange({ ...acter, ...values })}
    >
      {({ handleChange, values }) => (
        <Form>
          <FormControl component="fieldset" fullWidth>
            <FormLabel className={classes.fieldLabel} component="legend">
              Whether your organisation's setting is set to public or private
            </FormLabel>
            <RadioGroup
              aria-label="acter-privacy-setting"
              name="acterPrivacySetting"
              value={values.acterPrivacySetting}
              onChange={handleChange}
            >
              <SettingsRadio
                label="Public"
                value={ActerPrivacySettings.PUBLIC}
              />
              <SettingsRadio
                label="Private"
                value={ActerPrivacySettings.PRIVATE}
              />
            </RadioGroup>
          </FormControl>

          <FormButtons align="right" hideUnlessDirty={true} />
          <FormControl component="fieldset" fullWidth>
            <FormLabel className={classes.fieldLabel} component="legend">
              Who can join Acter
            </FormLabel>
            <RadioGroup
              aria-label="acter-who-can-join-setting"
              name="acterWhoCanJoinSetting"
              value={values.acterWhoCanJoinSetting}
              onChange={handleChange}
            >
              <SettingsRadio
                label="Acters"
                value={ActerWhoCanJoinSettings.ACTERS}
              />
              <SettingsRadio
                label="Users"
                value={ActerWhoCanJoinSettings.USERS}
              />
            </RadioGroup>
          </FormControl>

          <FormButtons align="right" hideUnlessDirty={true} />
        </Form>
      )}
    </Formik>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fieldLabel: {
      color: theme.palette.secondary.main,
    },
  })
)
