import React, { FC } from 'react'

import {
  KeyboardDatePicker,
  KeyboardDatePickerProps,
} from '@material-ui/pickers'

import { DD_MM_YY_FORMAT } from '@acter/lib/constants'

export type DatePickerProps = KeyboardDatePickerProps

export const DatePicker: FC<DatePickerProps> = (args) => (
  <KeyboardDatePicker
    {...args}
    autoOk
    fullWidth
    inputVariant="outlined"
    format={DD_MM_YY_FORMAT}
    InputAdornmentProps={{ position: 'start' }}
  />
)
