import React, { FC } from 'react'

import DateUtils from '@date-io/date-fns'
import { Grid } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

import { Field, useFormikContext } from 'formik'
import { CheckboxWithLabel } from 'formik-material-ui'

import { DatePickerField } from '@acter/components/util/pickers/date-picker-field'
import { TimePickerField } from '@acter/components/util/pickers/time-picker-field'

export interface StartEndTimeDatePickerValues {
  isAllDay: boolean
  startDate: Date
  startTime: Date
  endDate: Date
  endTime: Date
}

export interface StartEndTimeDatePickerProps {
  hideIsAllDayCheckBox?: boolean
}

export const StartEndTimeDatePicker: FC<StartEndTimeDatePickerProps> = ({
  hideIsAllDayCheckBox = false,
}) => {
  const { values } = useFormikContext<StartEndTimeDatePickerValues>()
  return (
    <MuiPickersUtilsProvider utils={DateUtils}>
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
        {!hideIsAllDayCheckBox && (
          <Grid item xs={12}>
            <Field
              component={CheckboxWithLabel}
              type="checkbox"
              name="isAllDay"
              Label={{ label: 'All day activity', style: { color: grey[700] } }}
              inputProps={{ 'aria-label': 'all day activity' }}
            />
          </Grid>
        )}
      </Grid>
    </MuiPickersUtilsProvider>
  )
}
