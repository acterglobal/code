import React, { FC, useEffect } from 'react'

// import DateUtils from '@date-io/date-fns'
import { Grid, useTheme } from '@mui/material'

import { differenceInMinutes, set } from 'date-fns'
import isValid from 'date-fns/isValid'
import { Field, FormikTouched, useFormikContext } from 'formik'
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
  const theme = useTheme()
  const {
    values: { endAt, isAllDay, startAt },
    touched: { endAt: endAtTouched, startAt: startAtTouched },
    setFieldValue,
  } = useFormikContext<StartEndDateTimePickerValues>()

  useEffect(() => {
    if (isAllDay === true) {
      if (isValid(startAt))
        setFieldValue(
          'endAt',
          set(endAt, { hours: 23, minutes: 59, seconds: 59 })
        )
      if (isValid(endAt))
        setFieldValue(
          'startAt',
          set(startAt, { hours: 0, minutes: 0, seconds: 0 })
        )
    }
  }, [isAllDay])

  const validateDateTime = (touched: FormikTouched<Date>) => (val: Date) => {
    if (!touched) return
    if (!val) return 'Required'
    if (!isValid(val)) return 'Invaild date'
  }
  const validateEndTime = (val: Date) => {
    const basicValidation = validateDateTime(endAtTouched)(val)
    if (basicValidation) return basicValidation
    if (startAt && isValid(startAt) && differenceInMinutes(val, startAt) < 0) {
      return 'Cannot be before start'
    }
  }

  const gridSize = isAllDay ? 6 : 12

  return (
    <Grid container spacing={2}>
      <Grid item xs={gridSize}>
        <DateTimePicker
          placeholder="Start"
          name="startAt"
          isAllDay={isAllDay}
          required={true}
          maxDate={endAt && isValid(endAt) ? endAt : undefined}
          validate={validateDateTime(startAtTouched)}
        />
      </Grid>
      <Grid item xs={gridSize}>
        <DateTimePicker
          placeholder="End"
          name="endAt"
          isAllDay={isAllDay}
          required={true}
          minDate={startAt && isValid(startAt) ? startAt : undefined}
          validate={validateEndTime}
        />
      </Grid>

      {!hideIsAllDayCheckBox && (
        <Grid item xs={12}>
          <Field
            component={CheckboxWithLabel}
            type="checkbox"
            name="isAllDay"
            Label={{
              label: 'All day activity',
              style: { color: theme.palette.grey[700] },
            }}
            inputProps={{ 'aria-label': 'all day activity' }}
          />
        </Grid>
      )}
    </Grid>
  )
}
