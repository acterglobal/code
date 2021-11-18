import React, { FC, useEffect } from 'react'

// import DateUtils from '@date-io/date-fns'
import { Grid } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

// import {
//   KeyboardDateTimePicker,
//   MuiPickersUtilsProvider,
// } from '@material-ui/pickers'
import { differenceInMinutes } from 'date-fns'
import isValid from 'date-fns/isValid'
import { Field, useFormikContext } from 'formik'
import { CheckboxWithLabel } from 'formik-material-ui'

import { DateTimePicker } from '@acter/components/molecules/fields/datetime-picker'
import { DATE_FORMAT, DATE_TIME_FORMAT_LONG } from '@acter/lib/constants'

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

  // const validateEndAt = (maybeEndDate: Date): string => {
  //   debugger
  //   if (!startAt || !isValid(startAt)) return ''
  //   if (!isValid(maybeEndDate)) return 'Invalid date'
  //   if (differenceInMinutes(endAt, startAt) < 0)
  //     return 'Cannot end before start'
  //   return ''
  // }

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
        {/* <MuiPickersUtilsProvider utils={DateUtils}>
          <KeyboardDateTimePicker
            placeholder="End"
            required={true}
            value={endAt}
            onChange={(val) => setFieldValue('endAt', val)}
            autoOk
            fullWidth
            ampm={false}
            inputVariant="outlined"
            format={DATE_FORMAT}
            InputAdornmentProps={{ position: 'start' }}
          />
        </MuiPickersUtilsProvider> */}
        <DateTimePicker
          placeholder="End"
          name="endAt"
          isAllDay={isAllDay}
          required={true}
          minDate={startAt && isValid(startAt) ? startAt : null}
          // validate={validateEndAt}
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
