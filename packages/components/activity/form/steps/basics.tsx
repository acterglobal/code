import React, { FC, useState } from 'react'

import { Box } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { parse } from 'date-fns'
import { Field, useFormikContext } from 'formik'
import { TextField } from 'formik-material-ui'

import {
  LocationVenuePicker,
  LocationVenuePickerValues,
} from '@acter/components/activity/form/fields/location-venue-picker'
import { SelectActivityType } from '@acter/components/activity/form/fields/select-activity-type'
import {
  StartEndTimeDatePicker,
  StartEndTimeDatePickerValues,
} from '@acter/components/activity/form/fields/start-end-date-time-picker'
import { FormSection } from '@acter/components/styled/form-section'

export interface BasicsStepValues
  extends LocationVenuePickerValues,
    StartEndTimeDatePickerValues {
  id?: string
  organiserActerId: string
  activityTypeId: string
  isAllDay: boolean
  startTime: Date
  endTime: Date
}

export const BasicsStep: FC = () => {
  const classes = useStyles()
  const { values } = useFormikContext<BasicsStepValues>()
  const [selectedTypeId, setSelectedTypeId] = useState(values.activityTypeId)

  const handleSelectedType = (typeId: string) => {
    setSelectedTypeId(typeId)
    values.activityTypeId = typeId
  }

  if (values.isAllDay === true) {
    values.endTime = parse('23.59', 'hh:mm', new Date())
    values.startTime = parse('00.00', 'hh:mm', new Date())
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
        <StartEndTimeDatePicker />
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
