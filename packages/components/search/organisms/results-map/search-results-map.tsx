import React, { FC, useEffect, useRef, useState } from 'react'

import { makeStyles, createStyles, Box } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { GoogleMap, OverlayView, useLoadScript } from '@react-google-maps/api'

import debounce from 'just-debounce'
import { usePosition } from 'use-position'

import { ActerProfileImage } from '@acter/components/atoms/acter/profile-image'
import { LoadingBar } from '@acter/components/atoms/loading/bar'
import { useSearchVariables } from '@acter/components/contexts/search-variables'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { Acter } from '@acter/schema'

export interface SearchResultsMapProps {
  acters: Acter[]
  onBoundsChange?: () => void
  onActerHover: (id: string) => void
}

const defaultCenter: google.maps.LatLngLiteral = {
  lat: 56.1780842,
  lng: 10.1119354,
}

const markerSize = 30

const googleMapsApiKey =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
  process.env.STORYBOOK_GOOGLE_MAPS_API_KEY

export const SearchResultsMap: FC<SearchResultsMapProps> = ({
  acters,
  onActerHover,
}) => {
  const classes = useStyles()
  const [searchVariables, setSearchVariables] = useSearchVariables()
  const mapRef = useRef<google.maps.Map>()
  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey })
  const { latitude, longitude, error: usePositionError } = usePosition()
  const [mapCenter, setMapCenter] = useState<google.maps.LatLngLiteral>()

  useEffect(() => {
    if (latitude && longitude) {
      setMapCenter({ lat: latitude, lng: longitude })
    }

    if (usePositionError) {
      setMapCenter(defaultCenter)
    }
  }, [latitude, longitude, usePositionError])

  const handleMapLoad = (map: google.maps.Map): void => {
    mapRef.current = map
  }

  const setMapSearchVariables = () => {
    if (mapRef.current?.getBounds?.()) {
      const { north, east, south, west } = mapRef.current.getBounds().toJSON()
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
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { north, east, south, west } = mapRef.current?.getBounds?.().toJSON()
    if (
      north !== searchVariables.north ||
      east !== searchVariables.east ||
      south !== searchVariables.south ||
      west !== searchVariables.west
    )
      setMapSearchVariables()
  }, 300)

  if (!isLoaded || !mapCenter) return <LoadingBar />

  if (loadError) return <Alert severity="error">{loadError}</Alert>

  const onHover = (acterId = '') => debounce(() => onActerHover(acterId), 100)

  return (
    <GoogleMap
      mapContainerClassName={classes.searchResultsMap}
      center={mapCenter}
      zoom={12}
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
              key={`map-result-${acter.id}`}
            >
              <Box
                className={classes.acterMarker}
                onMouseOver={onHover(acter.id)}
                onMouseOut={onHover()}
              >
                <Link href={acterAsUrl({ acter })}>
                  <ActerProfileImage
                    acter={acter}
                    background="white"
                    borderSize={1}
                    size={markerSize}
                  />
                </Link>
              </Box>
            </OverlayView>
          )
      )}
    </GoogleMap>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    searchResultsMap: {
      height: '100%',
    },
    acterMarker: {
      transition: 'transform 0.2s ease-in-out',
      '&:hover': { transform: 'scale(1.2)' },
    },
  })
)
