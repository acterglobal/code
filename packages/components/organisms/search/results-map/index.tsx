import React, { FC } from 'react'

import { makeStyles, createStyles } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { GoogleMap, OverlayView, useLoadScript } from '@react-google-maps/api'

import { ActerProfileImage } from '@acter/components/atoms/acter/profile-image'
import { LoadingBar } from '@acter/components/atoms/loading/bar'
import { Acter } from '@acter/schema'

export interface SearchResultsMapProps {
  acters: Acter[]
  onBoundsChange?: () => void
}

const defaultCenter: google.maps.LatLngLiteral = {
  lat: 56.1780842,
  lng: 10.1119354,
}

const markerSize = 30

const googleMapsApiKey =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
  process.env.STORYBOOK_GOOGLE_MAPS_API_KEY

export const SearchResultsMap: FC<SearchResultsMapProps> = ({ acters }) => {
  const classes = useStyles()
  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey })

  if (!isLoaded) return <LoadingBar />

  if (loadError) return <Alert severity="error">{loadError}</Alert>

  return (
    <GoogleMap
      mapContainerClassName={classes.root}
      center={defaultCenter}
      zoom={9}
    >
      {acters?.map(
        (acter) =>
          acter.locationLat &&
          acter.locationLng && (
            <OverlayView
              position={{ lat: acter.locationLat, lng: acter.locationLng }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <ActerProfileImage
                acter={acter}
                background="white"
                borderSize={1}
                size={markerSize}
              />
            </OverlayView>
          )
      )}
    </GoogleMap>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100vh',
    },
  })
)
