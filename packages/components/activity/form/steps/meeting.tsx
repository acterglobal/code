import React, { FC } from 'react'

import { Box } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { Field } from 'formik'
import { TextField } from 'formik-material-ui'

import { LocationVenuePicker } from '@acter/components/activity/form/fields/location-venue-picker'
import { StartEndTimeDatePicker } from '@acter/components/activity/form/fields/start-end-date-time-picker'
import {
  SettingsStep,
  SettingsStepProps,
} from '@acter/components/activity/form/steps/settings'
import { FormSection } from '@acter/components/styled/form-section'

export type MeetingStepProps = SettingsStepProps

export const MeetingStep: FC<MeetingStepProps> = ({ acters }) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <FormSection>
        <Field
          className={classes.field}
          fullWidth
          component={TextField}
          variant="outlined"
          label="Name of the Activity"
          name="name"
          required={true}
        />
      </FormSection>

      <FormSection>
        <StartEndTimeDatePicker hideIsAllDayCheckBox />
      </FormSection>

      <FormSection>
        <LocationVenuePicker />
      </FormSection>

      <FormSection>
        <Field
          className={classes.field}
          fullWidth
          component={TextField}
          label="Description"
          name="description"
          variant="outlined"
          multiline={true}
          rows={5}
        />
      </FormSection>

      <FormSection>
        <SettingsStep acters={acters} />
      </FormSection>
    </Box>
  )
}
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0.5),
  },
  field: {
    fontSize: '0.5rem',
    marginBottom: theme.spacing(2),
    color: theme.palette.secondary.light,
  },
}))
