import React, { FC, useEffect, useState } from 'react'

import {
  Box,
  createStyles,
  FormHelperText,
  Grid,
  makeStyles,
  Popper,
  PopperProps,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import {
  Autocomplete,
  AutocompleteChangeReason,
  AutocompleteProps,
} from '@material-ui/lab'

import { useFormikContext } from 'formik'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { GooglePlacesType } from '@acter/lib/constants/google-places-type'
import { useGooglePlacesApi } from '@acter/lib/google/use-google-places-api'
import { useTranslation } from '@acter/lib/i18n/use-translation'

export type LocationPickerProps = Partial<
  AutocompleteProps<LocationPickerResult, false, false, false>
> & {
  label?: string
  placeholder?: string
  types?: GooglePlacesType[]
  cacheKey?: string
  fieldFor?: string
}

export type LocationPickerResult = {
  location: string
  locationLat: number
  locationLng: number
  placeId: string
}

export const LocationPicker: FC<LocationPickerProps> = (props) => {
  const classes = useStyles()
  const { t } = useTranslation('common')

  const {
    types,
    cacheKey,
    label = t('form.location'),
    placeholder,
    fieldFor,
    ...autocompleteProps
  } = props
  const [error, setError] = useState<Error | ErrorEvent>()
  const { setValues, values } = useFormikContext<LocationPickerResult>()
  const { location, locationLat, locationLng, placeId } = values
  const {
    init,
    suggestions: { data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
    initOnMount: false,
    defaultValue: location,
    requestOptions: types ? { types } : undefined,
    cacheKey,
  })
  const [scriptLoading, scriptLoadError] = useGooglePlacesApi()

  useEffect(() => {
    // Wait for the Google Places API script to load
    if (!scriptLoading) init()
  }, [scriptLoading])

  useEffect(() => {
    if (scriptLoadError) setError(scriptLoadError)
  }, [scriptLoadError])

  useEffect(() => {
    if (location && !(locationLat && locationLng && placeId))
      return setError(
        new Error(
          `Location value of ${location} is not set correctly. Please enter it again and select a place from the dropdown menu`
        )
      )
    return setError(null)
  }, [location, locationLat, locationLng, placeId])

  if (scriptLoading) return <LoadingSpinner />

  const handleInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(e.target.value)
  }

  const PopperWithAttribution = ({ children, ...restArgs }: PopperProps) => (
    <Popper {...restArgs}>
      {children}
      <Box display="flex" justifyContent="flex-end">
        <img
          src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
          alt="Powered by Google"
        />
      </Box>
    </Popper>
  )

  const handleOnChange = async (
    _evt,
    place,
    reason: AutocompleteChangeReason
  ) => {
    if (reason === 'clear') {
      setValues({
        ...values,
        placeId: null,
        location: null,
        locationLat: null,
        locationLng: null,
      })
      return
    }
    try {
      const { place_id: placeId, description } = place
      const results = await getGeocode({ placeId })
      const { lat, lng } = await getLatLng(results[0])
      setValues({
        ...values,
        placeId,
        location: description,
        locationLat: lat,
        locationLng: lng,
      })
      clearSuggestions()
      setValue(description, false)
    } catch (e) {
      setError(e)
    }
  }

  return (
    <>
      <Autocomplete
        {...autocompleteProps}
        getOptionLabel={(option) =>
          typeof option === 'string' ? option : option.description
        }
        options={data}
        autoComplete
        includeInputInList
        filterSelectedOptions
        noOptionsText="No results"
        PopperComponent={PopperWithAttribution}
        defaultValue={location}
        value={data.find((x) => x.description === location) || location || null}
        onChange={handleOnChange}
        renderInput={(params) => {
          return fieldFor === 'profile' ? (
            <TextField
              {...params}
              className={classes.textField}
              InputProps={{
                ...params.InputProps,
                disableUnderline: true,
              }}
              error={!!error}
              onChange={(e) => handleInput(e)} // <-- moved from Autocomplete prop to here
            />
          ) : (
            <TextField
              {...params}
              size="small"
              label={label}
              placeholder={placeholder}
              variant="outlined"
              fullWidth
              error={!!error}
              onChange={(e) => handleInput(e)} // <-- moved from Autocomplete prop to here
            />
          )
        }}
        renderOption={(option) => {
          return (
            <Grid container alignItems="center">
              <Grid item>
                <LocationOnIcon />
              </Grid>
              <Grid item xs>
                {option.description}
                <Typography variant="body2" color="textSecondary">
                  {option.structured_formatting.secondary_text}
                </Typography>
              </Grid>
            </Grid>
          )
        }}
      />
      {error && (
        <FormHelperText error={!!error}>{error.message}</FormHelperText>
      )}
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      paddingTop: 2,
      paddingLeft: 15,
      paddingRight: 15,
      backgroundColor: theme.colors.white,
      borderRadius: 5,
      height: 45,
      width: 420,

      '& .MuiAutocomplete-input:first-child': {
        fontSize: '1.4rem',
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
  })
)
