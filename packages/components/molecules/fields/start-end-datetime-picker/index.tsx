import React, { FC, useEffect } from 'react'

// import DateUtils from '@date-io/date-fns'
import { Grid } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

import { differenceInMinutes, set } from 'date-fns'
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

  const validateStartBeforeEnd = (endAtVal: Date) => {
    if (
      endAtVal &&
      startAt &&
      isValid(endAtVal) &&
      isValid(startAt) &&
      differenceInMinutes(endAtVal, startAt) < 0
    ) {
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
          validate={validateStartBeforeEnd}
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
