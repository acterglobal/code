import React, { FC, useEffect, useRef } from 'react'

import { makeStyles, createStyles } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { GoogleMap, OverlayView, useLoadScript } from '@react-google-maps/api'

import debounce from 'just-debounce'

import { ActerProfileImage } from '@acter/components/atoms/acter/profile-image'
import { LoadingBar } from '@acter/components/atoms/loading/bar'
import { useSearchVariables } from '@acter/components/contexts/search-variables'
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
  const [searchVariables, setSearchVariables] = useSearchVariables()
  const mapRef = useRef<google.maps.Map>()
  const initialRender = useRef(true)
  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey })

  const handleMapLoad = (map: google.maps.Map): void => {
    mapRef.current = map
  }

  const setMapSearchVariables = () => {
    if (mapRef.current) {
      const {
        north,
        east,
        south,
        west,
      } = mapRef.current?.getBounds?.().toJSON()
      setSearchVariables({
        ...searchVariables,
        north,
        east,
        south,
        west,
      })
    }
  }

  const handleBoundsChanged = debounce(() => {
    const { north, east, south, west } = mapRef.current?.getBounds?.().toJSON()
    if (
      initialRender.current === false &&
      (north !== searchVariables.north ||
        east !== searchVariables.east ||
        south !== searchVariables.south ||
        west !== searchVariables.west)
    ) {
      setMapSearchVariables()
    }
  }, 300)

  useEffect(() => {
    if (
      initialRender.current &&
      typeof mapRef.current?.getBounds === 'function'
    ) {
      setMapSearchVariables()
      initialRender.current = false
    }
  }, [initialRender.current, mapRef.current])

  if (!isLoaded) return <LoadingBar />

  if (loadError) return <Alert severity="error">{loadError}</Alert>

  return (
    <GoogleMap
      mapContainerClassName={classes.root}
      center={defaultCenter}
      zoom={9}
      onLoad={handleMapLoad}
      onBoundsChanged={handleBoundsChanged}
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
      height: '100%',
    },
  })
)
