import React, { FC } from 'react'
import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { Field, useFormikContext } from 'formik'
import { TextField, RadioGroup } from 'formik-material-ui'

export interface LocationVenuePickerValues {
  isOnline: boolean
}

export const LocationVenuePicker: FC = () => {
  const classes = useStyles()
  const { values, setFieldValue } =
    useFormikContext<LocationVenuePickerValues>()

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
        <Box className={classes.isOnlineRadioButtons}>
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
      {!values.isOnline && (
        <Field
          className={classes.textinput}
          component={TextField}
          variant="outlined"
          name="location"
          title="address"
          placeholder="Type address"
          required={true}
        />
      )}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: 20,
    },
    label: {
      color: grey[700],
      marginBottom: 10,
      fontSize: '0.9rem',
      fontWeight: theme.typography.fontWeightBold,
    },
    textinput: {
      fontSize: '0.5rem',
      // marginBottom: 15,
      color: theme.palette.secondary.light,
      width: '100%',
    },
    locationLabelSection: {
      display: 'flex',
      marginBottom: 10,
    },
    locationLabel: {
      color: grey[800],
      fontSize: '0.9rem',
      marginRight: 20,
    },
    isOnlineRadioButtons: {
      dipslay: 'flex',
      flexDirection: 'row',
    },
  })
)
