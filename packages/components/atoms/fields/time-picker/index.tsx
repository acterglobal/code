import React, { FC } from 'react'

import { AccessTime } from '@material-ui/icons'
import {
  KeyboardTimePicker,
  KeyboardTimePickerProps,
} from '@material-ui/pickers'

export type TimePickerProps = KeyboardTimePickerProps

export const TimePicker: FC<TimePickerProps> = (args) => (
  <KeyboardTimePicker
    {...args}
    autoOk
    fullWidth
    inputVariant="outlined"
    ampm={false}
    keyboardIcon={<AccessTime />}
    InputAdornmentProps={{ position: 'start' }}
  />
)
