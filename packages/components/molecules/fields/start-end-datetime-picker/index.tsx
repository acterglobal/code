import React, { FC, useEffect } from 'react'

// import DateUtils from '@date-io/date-fns'
import { Grid } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

import { differenceInMinutes, parse } from 'date-fns'
import isValid from 'date-fns/isValid'
import { Field, useFormikContext } from 'formik'
import { CheckboxWithLabel } from 'formik-material-ui'

import { DateTimePicker } from '@acter/components/molecules/fields/datetime-picker'

export interface StartEndDateTimePickerProps {
  hideIsAllDayCheckBox?: boolean
}

export interface StartEndDateTimePickerValues {
  startAt: Date
  endAt: Date
  isAllDay: boolean
}

export const StartEndDateTimePicker: FC<StartEndDateTimePickerProps> = ({
  hideIsAllDayCheckBox,
}) => {
  const {
    values: { endAt, isAllDay, startAt },
    setFieldError,
    setFieldValue,
  } = useFormikContext<StartEndDateTimePickerValues>()

  useEffect(() => {
    if (
      endAt &&
      startAt &&
      isValid(endAt) &&
      isValid(startAt) &&
      differenceInMinutes(endAt, startAt) < 0
    )
      setFieldError('endAt', 'Cannot be before start')
  }, [endAt, startAt])

  useEffect(() => {
    if (isAllDay === true) {
      setFieldValue('endAt', parse('23.59', 'hh:mm', endAt))
      setFieldValue('startAt', parse('00.00', 'hh:mm', startAt))
    }
  }, [isAllDay])

  const gridSize = isAllDay ? 6 : 12

  return (
    <Grid container spacing={2}>
      <Grid item xs={gridSize}>
        <DateTimePicker
          placeholder="Start"
          name="startAt"
          isAllDay={isAllDay}
          required={true}
          maxDate={endAt && isValid(endAt) ? endAt : null}
        />
      </Grid>
      <Grid item xs={gridSize}>
        <DateTimePicker
          placeholder="End"
          name="endAt"
          isAllDay={isAllDay}
          required={true}
          minDate={startAt && isValid(startAt) ? startAt : null}
        />
      </Grid>

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
  )
}
