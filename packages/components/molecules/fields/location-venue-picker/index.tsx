import React, { FC } from 'react'

import { Box, FormControlLabel, FormLabel, Radio, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { Field, useFormikContext } from 'formik'
import { TextField, RadioGroup } from 'formik-material-ui'

import {
  LocationPicker,
  LocationPickerResult,
} from '@acter/components/atoms/fields/location-picker'

export interface LocationVenuePickerValues extends LocationPickerResult {
  isOnline: boolean
  url: string
}

export const LocationVenuePicker: FC = () => {
  const classes = useStyles()
  const {
    values,
    setFieldValue,
  } = useFormikContext<LocationVenuePickerValues>()

  return (
    <Box className={classes.container}>
      <Field
        component={RadioGroup}
        name="isOnline"
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
          setFieldValue('isOnline', evt.currentTarget.value === 'true')
        }}
      >
        <FormLabel className={classes.label}>Location</FormLabel>
        <Box>
          <FormControlLabel value={false} control={<Radio />} label="Venue" />
          <FormControlLabel value={true} control={<Radio />} label="Online" />
        </Box>
      </Field>
      {values.isOnline && (
        <Field
          className={classes.textinput}
          component={TextField}
          variant="outlined"
          name="url"
          title="meeting url"
          placeholder="Type online meeting link"
          required={true}
        />
      )}
      {!values.isOnline && <LocationPicker />}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: 20,
    },
    label: {
      color: theme.colors.grey.dark,
      marginBottom: 10,
      fontSize: '0.9rem',
      fontWeight: theme.typography.fontWeightBold,
    },
    textinput: {
      fontSize: '0.5rem',
      color: theme.palette.secondary.light,
      width: '100%',
    },
  })
)
