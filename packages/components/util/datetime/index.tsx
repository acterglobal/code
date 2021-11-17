import React, { FC } from 'react'

import DateUtils from '@date-io/date-fns'
import { Grid, InputAdornment } from '@material-ui/core'
import EventIcon from '@material-ui/icons/Event'
import ScheduleIcon from '@material-ui/icons/Schedule'
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'

import { getDate, getHours, getMinutes, getMonth, getYear, set } from 'date-fns'

import { DD_MM_YY_FORMAT } from '@acter/lib/constants'

export interface DateTimePickerProps {
  placeholderDate: string
  placeholderTime: string
  value: Date
  isAllDay: boolean
  onChange: (date: Date) => void
  minDate?: Date
  maxDate?: Date
}

export const DateTimePicker: FC<DateTimePickerProps> = ({
  placeholderDate,
  placeholderTime,
  value,
  minDate,
  maxDate,
  isAllDay,
  onChange,
}) => {
  const handleDateChange = (date) => {
    onChange(
      set(value, {
        year: getYear(date),
        month: getMonth(date),
        date: getDate(date),
      })
    )
  }
  const handleTimeChange = (date) => {
    onChange(
      set(value, {
        hours: getHours(date),
        minutes: getMinutes(date),
        seconds: 0,
      })
    )
  }

  return (
    <MuiPickersUtilsProvider utils={DateUtils}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <KeyboardDatePicker
            placeholder={placeholderDate}
            value={value}
            minDate={minDate}
            maxDate={maxDate}
            onChange={handleDateChange}
            autoOk
            inputVariant="outlined"
            format={DD_MM_YY_FORMAT}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EventIcon />
                </InputAdornment>
              ),
            }}
          />
          {!isAllDay && (
            <KeyboardTimePicker
              placeholder={placeholderTime}
              value={value}
              onChange={handleTimeChange}
              autoOk
              inputVariant="outlined"
              ampm={false}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ScheduleIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  )
}
