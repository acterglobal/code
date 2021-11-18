import React, { FC } from 'react'

import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { Formik, Form } from 'formik'

import { FormButtons, SettingsRadio } from '@acter/components/util/forms'
import { capitalize } from '@acter/lib/string/capitalize'
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
   * The acter whose accessability settings you want to manage
   */
  acter: Acter
  /**
   * Callback for updating Acter privacy settings
   */
  onSettingsChange: (acter: Acter) => void
}

export const ActerAccessabilitySettings: FC<ActerAccessabilitySettingsProps> = ({
  acter,
  onSettingsChange,
}) => {
  const classes = useStyles()

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
            <FormLabel component="legend">
              <Typography>
                Who can access{' '}
                <Typography className={classes.sectionItem} display="inline">
                  {`${capitalize(acter.name)}`}
                </Typography>{' '}
              </Typography>
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

          <Box className={classes.sectionContainer}>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend">
                <Typography>
                  Who can join{' '}
                  <Typography className={classes.sectionItem} display="inline">
                    {`${capitalize(acter.name)}`}
                  </Typography>{' '}
                </Typography>
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
          </Box>

          <FormButtons align="right" hideUnlessDirty={true} />
        </Form>
      )}
    </Formik>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dd: {
      color: theme.palette.secondary.main,
    },
    fieldLabel: {
      //fontWeight: theme.typography.fontWeightMedium,
      //color: theme.palette.text,
      fontSize: 14,
    },
    sectionContainer: {
      marginTop: theme.spacing(3),
    },
    sectionItem: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 14,
    },
  })
)
