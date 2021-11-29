import React, { FC, useEffect, useState } from 'react'

import {
  Box,
  FormHelperText,
  Grid,
  Popper,
  PopperProps,
  TextField,
  Typography,
} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { Autocomplete, AutocompleteChangeReason } from '@material-ui/lab'

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'

import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { GooglePlacesType } from '@acter/lib/constants/google-places-type'
import { useGooglePlacesApi } from '@acter/lib/google/use-google-places-api'

export type LocationPickerProps = {
  label?: string
  placeholder?: string
  value: string
  types?: GooglePlacesType[]
  onSelect: (location: LocationPickerResult) => void
}

export type LocationPickerResult = {
  placeId: string
  description: string
  lat: number
  lng: number
}

export const LocationPicker: FC<LocationPickerProps> = ({
  label,
  placeholder,
  value,
  types,
  onSelect,
}) => {
  const [error, setError] = useState<Error | ErrorEvent>()
  const {
    init,
    suggestions: { data },
    setValue,
    clearSuggestions,
    clearCache,
  } = usePlacesAutocomplete({
    debounce: 300,
    initOnMount: false,
    defaultValue: value,
    requestOptions: types ? { types } : undefined,
  })
  const [scriptLoading, scriptLoadError] = useGooglePlacesApi()

  useEffect(() => {
    // Wait for the Google Places API script to load
    if (!scriptLoading) {
      init()
      clearCache()
    }
  }, [scriptLoading])

  useEffect(() => {
    if (scriptLoadError) setError(scriptLoadError)
  }, [scriptLoadError])

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
      onSelect({
        placeId: null,
        description: null,
        lat: null,
        lng: null,
      })
      return
    }
    try {
      const { place_id: placeId, description } = place
      const results = await getGeocode({ placeId })
      const { lat, lng } = await getLatLng(results[0])
      onSelect({
        placeId,
        description,
        lat,
        lng,
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
        style={{ width: 300 }}
        getOptionLabel={(option) =>
          typeof option === 'string' ? option : option.description
        }
        options={data}
        autoComplete
        includeInputInList
        filterSelectedOptions
        noOptionsText="No results"
        PopperComponent={PopperWithAttribution}
        defaultValue={value?.description}
        value={data.find((x) => x.description === value?.description)}
        onChange={handleOnChange}
        renderInput={(params) => (
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
        )}
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
