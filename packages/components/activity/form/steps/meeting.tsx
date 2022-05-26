import React, { FC, useState } from 'react'

import { Box, FormLabel } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { Field, useFormikContext } from 'formik'
import { TextField } from 'formik-material-ui'

import {
  SettingsStep,
  SettingsStepProps,
} from '@acter/components/activity/form/steps/settings'
import { Switch } from '@acter/components/atoms/fields/switch'
import { LocationVenuePicker } from '@acter/components/molecules/fields/location-venue-picker'
import { StartEndDateTimePicker } from '@acter/components/molecules/fields/start-end-datetime-picker'
import { FormSection } from '@acter/components/styled/form-section'
import { TextEditor } from '@acter/components/util/text-editor'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { capitalize } from '@acter/lib/string/capitalize'

export type MeetingStepProps = SettingsStepProps

export interface MeetingStepValues {
  name: string
  description?: string
}

export const MeetingStep: FC<MeetingStepProps> = ({ acters }) => {
  const { t } = useTranslation('common')
  const classes = useStyles()
  const { values, setFieldValue } = useFormikContext<MeetingStepValues>()
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
          label={capitalize(t('name'))}
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
        <FormLabel className={classes.label}>
          {capitalize(t('description'))}
        </FormLabel>
        <TextEditor
          height={150}
          initialValue={values.description}
          handleInputChange={(value) => setFieldValue('description', value)}
        />
      </FormSection>

      <FormSection>
        <FormLabel className={classes.label}>
          {t('form.shareActivity')}
        </FormLabel>
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
