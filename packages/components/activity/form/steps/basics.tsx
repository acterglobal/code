import React, { FC, useState } from 'react'

import { Box } from '@mui/material'
import { Theme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';

import { Field, useFormikContext } from 'formik'
import { TextField } from 'formik-material-ui'

import { SelectActivityType } from '@acter/components/activity/form/fields/select-activity-type'
import {
  LocationVenuePicker,
  LocationVenuePickerValues,
} from '@acter/components/molecules/fields/location-venue-picker'
import {
  StartEndDateTimePicker,
  StartEndDateTimePickerValues,
} from '@acter/components/molecules/fields/start-end-datetime-picker'
import { FormSection } from '@acter/components/styled/form-section'

export interface BasicsStepValues
  extends LocationVenuePickerValues,
    StartEndDateTimePickerValues {
  id?: string
  organiserActerId: string
  activityTypeId: string
  isAllDay: boolean
}

export const BasicsStep: FC = () => {
  const classes = useStyles()
  const { values } = useFormikContext<BasicsStepValues>()
  const [selectedTypeId, setSelectedTypeId] = useState(values.activityTypeId)

  const handleSelectedType = (typeId: string) => {
    setSelectedTypeId(typeId)
    values.activityTypeId = typeId
  }

  return (
    <Box className={classes.container}>
      <FormSection>
        <Field
          className={classes.textinput}
          fullWidth
          component={TextField}
          variant="outlined"
          label="Name of the Activity"
          name="name"
          required={true}
        />
      </FormSection>

      {values.id && (
        <FormSection>
          <SelectActivityType
            selectedTypeId={selectedTypeId}
            onChange={handleSelectedType}
          />
        </FormSection>
      )}
      <FormSection>
        <StartEndDateTimePicker />
      </FormSection>

      <FormSection>
        <LocationVenuePicker />
      </FormSection>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
  },
  textinput: {
    fontSize: '0.5rem',
    marginBottom: 15,
    color: theme.palette.secondary.light,
  },
}))
