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
import { Acter, ActerPrivacySettings } from '@acter/schema'

interface ActerVisibilitySettingsInitialValues {
  acterPrivacySetting: ActerPrivacySettings
}

export interface ActerVisibilitySettingsProps {
  /**
   * Callback for updating Acter privacy settings
   */
  onSettingsChange: (acter: Acter) => void
  /**
   * Whether we're in the middle of updating
   */
  loading: boolean
}

export const ActerVisibilitySettings: FC<ActerVisibilitySettingsProps> = ({
  onSettingsChange,
}) => {
  const { acter, loading } = useActer()
  const classes = useStyles()
  if (loading) return <LoadingSpinner />
  if (!acter) return null

  const initialValues: ActerVisibilitySettingsInitialValues = {
    acterPrivacySetting: ActerPrivacySettings[acter?.acterPrivacySetting],
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
              name="acterprivacysetting"
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
