import React, { FC } from 'react'

import { ActerAvatar } from '../acter/avatar'
import GoogleMapReact, { Coords } from 'google-map-react'

import { Acter } from '@acter/schema'

interface SearchMapProps {
  acters: Acter[]
  onBoundsChange: () => void
}

export const SearchMap: FC<SearchMapProps> = ({ acters, onBoundsChange }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
      center={{ lat: 56.162939, lng: 10.203921 }}
      zoom={9}
      yesIWantToUseGoogleMapApiInternals
      onBoundsChange={() => {
        debugger
      }}
    >
      {acters?.map(
        (acter) =>
          acter.locationLat &&
          acter.locationLng && (
            <SearchMapMarker
              lat={acter.locationLat}
              lng={acter.locationLng}
              text={acter.name}
            >
              <ActerAvatar acter={acter} />
            </SearchMapMarker>
          )
      )}
    </GoogleMapReact>
  )
}

interface SearchMapMarkerProps {
  lat: number
  lng: number
  text: string
}

const SearchMapMarker: FC<SearchMapMarkerProps> = ({ children }) => (
  <>{children}</>
)
