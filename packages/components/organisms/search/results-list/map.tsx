import React, { FC } from 'react'

import { ActerAvatar } from '../acter/avatar'
import GoogleMapReact from 'google-map-react'

import { Acter } from '@acter/schema'

interface SearchMapProps {
  acters: Acter[]
}

export const SearchMap: FC<SearchMapProps> = ({ acters }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
      center={[56.162939, 10.203921]}
      zoom={9}
      yesIWantToUseGoogleMapApiInternals
    >
      {acters?.map((acter) => (
        <SearchMapMarker
          lat={acter.locationLat}
          lng={acter.locationLng}
          text={acter.name}
        >
          <ActerAvatar acter={acter} />
        </SearchMapMarker>
      ))}
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
