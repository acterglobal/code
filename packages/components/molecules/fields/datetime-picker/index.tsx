import React, { FC, FocusEvent } from 'react'

import DateUtils from '@date-io/date-fns'
import { FormControl, FormHelperText, Grid } from '@mui/material'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

import {
  getDate,
  getHours,
  getMinutes,
  getMonth,
  getYear,
  isValid,
  set,
} from 'date-fns'
import { parse } from 'date-fns'
import { FieldHookConfig } from 'formik'
import { useField } from 'formik'

import { DatePicker } from '@acter/components/atoms/fields/date-picker'
import { TimePicker } from '@acter/components/atoms/fields/time-picker'

export type DateTimePickerProps = FieldHookConfig<Date> & {
  isAllDay: boolean
  minDate?: Date
  maxDate?: Date
}

export const DateTimePicker: FC<DateTimePickerProps> = (props) => {
  const { placeholder, minDate, maxDate, isAllDay } = props
  const [{ value }, { error }, { setValue }] = useField(props)

  const isValueValid = value && isValid(value)
  const handleDateChange = (date: Date) => {
    const newValue = isValueValid
      ? set(value, {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date),
        })
      : date
    setValue(newValue)
  }
  const handleTimeChange = (skipValidCheck = false) => (date: Date) => {
    const dateWithTime = set(isValueValid ? value : new Date(), {
      hours: getHours(date),
      minutes: getMinutes(date),
      seconds: 0,
    })
    // If we're doing keyboard entry, we will end up with garbage
    if (skipValidCheck || isValid(dateWithTime)) {
      setValue(dateWithTime)
    }
  }

  const handleBlur = (evt: FocusEvent<HTMLInputElement>) => {
    handleTimeChange(true)(parse(evt.currentTarget.value, 'HH:mm', new Date()))
  }

  const dateSize = isAllDay ? 12 : 6

  return (
    <MuiPickersUtilsProvider utils={DateUtils}>
      <FormControl>
        <Grid container spacing={2}>
          <Grid item xs={dateSize}>
            <DatePicker
              placeholder={`${placeholder} Date`}
              value={value}
              minDate={minDate}
              maxDate={maxDate}
              onChange={handleDateChange}
              error={!!error}
            />
          </Grid>
          {!isAllDay && (
            <Grid item xs={6}>
              <TimePicker
                placeholder={`${placeholder} Time`}
                value={value}
                onChange={handleTimeChange(false)}
                onBlur={handleBlur}
                disabled={!isValueValid}
                error={!!error}
              />
            </Grid>
          )}
        </Grid>
        {error && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormHelperText error={!!error}>{error}</FormHelperText>
            </Grid>
          </Grid>
        )}
      </FormControl>
    </MuiPickersUtilsProvider>
  )
}
