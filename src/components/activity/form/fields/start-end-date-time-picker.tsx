import React, { FC } from 'react'
import { Moment } from 'moment'
import { Grid } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { Field, useFormikContext } from 'formik'
import { CheckboxWithLabel } from 'formik-material-ui'
import { DatePickerField } from 'src/components/util/pickers/date-picker-field'
import { TimePickerField } from 'src/components/util/pickers/time-picker-field'

export interface StartEndTimeDatePickerValues {
  isAllDay: boolean
  startDate: Moment
  startTime: Moment
  endDate: Moment
  endTime: Moment
}

export const StartEndTimeDatePicker: FC = () => {
  const { values } = useFormikContext<StartEndTimeDatePickerValues>()
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <DatePickerField
          placeholder="Start Date"
          name="startDate"
          required={true}
        />
      </Grid>
      {!values.isAllDay && (
        <Grid item xs={6}>
          <TimePickerField
            placeholder="Start Time"
            name="startTime"
            required={true}
          />
        </Grid>
      )}

      <Grid item xs={6}>
        <DatePickerField
          placeholder="End Date"
          name="endDate"
          required={true}
        />
      </Grid>
      {!values.isAllDay && (
        <Grid item xs={6}>
          <TimePickerField
            placeholder="End Time"
            name="endTime"
            required={true}
          />
        </Grid>
      )}
      <Grid item xs={12}>
        <Field
          component={CheckboxWithLabel}
          type="checkbox"
          name="isAllDay"
          Label={{ label: 'All day activity', style: { color: grey[700] } }}
          inputProps={{ 'aria-label': 'all day activity' }}
        />
      </Grid>
    </Grid>
  )
}
