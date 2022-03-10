import React, { FC, useState } from 'react'

import { Box, FormLabel } from '@mui/material'
import { Theme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';

import { Field } from 'formik'
import { TextField } from 'formik-material-ui'

import {
  SettingsStep,
  SettingsStepProps,
} from '@acter/components/activity/form/steps/settings'
import { Switch } from '@acter/components/atoms/fields/switch'
import { LocationVenuePicker } from '@acter/components/molecules/fields/location-venue-picker'
import { StartEndDateTimePicker } from '@acter/components/molecules/fields/start-end-datetime-picker'
import { FormSection } from '@acter/components/styled/form-section'

export type MeetingStepProps = SettingsStepProps

export const MeetingStep: FC<MeetingStepProps> = ({ acters }) => {
  const classes = useStyles()
  const [selectOrganiser, setSelectOrganiser] = useState(false)

  const handleChange = () => {
    setSelectOrganiser(!selectOrganiser)
  }

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
        <StartEndDateTimePicker hideIsAllDayCheckBox />
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
        <FormLabel className={classes.label}>Share Activity</FormLabel>
        <Box className={classes.switch}>
          <Switch
            name="host"
            checked={selectOrganiser}
            onChange={handleChange}
          />
        </Box>

        {selectOrganiser && <SettingsStep acters={acters} />}
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
  label: {
    color: theme.colors.grey.dark,
    fontSize: '0.9rem',
    fontWeight: theme.typography.fontWeightBold,
  },
  switch: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))
