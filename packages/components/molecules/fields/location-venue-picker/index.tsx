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

import { Field, useFormikContext } from 'formik'
import { TextField, RadioGroup } from 'formik-material-ui'

import {
  LocationPicker,
  LocationPickerResult,
} from '@acter/components/atoms/fields/location-picker'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { capitalize } from '@acter/lib/string/capitalize'

export interface LocationVenuePickerValues extends LocationPickerResult {
  isOnline: boolean
  url: string
}

export const LocationVenuePicker: FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'form' })
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
        <Box>
          <FormControlLabel
            value={false}
            control={<Radio />}
            label={capitalize(t('venue'))}
          />
          <FormControlLabel
            value={true}
            control={<Radio />}
            label={capitalize(t('online'))}
          />
        </Box>
      </Field>
      {values.isOnline && (
        <Field
          className={classes.textinput}
          component={TextField}
          variant="outlined"
          name="url"
          title="meeting url"
          placeholder={t('typeOnlineMeetingLink')}
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
