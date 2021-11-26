import useScript from 'react-script-hook'

declare type ErrorState = ErrorEvent | Error | null

export const useGooglePlacesApi = (): [boolean, ErrorState] => {
  const googlePlacesApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    : process.env.STORYBOOK_GOOGLE_MAPS_API_KEY
    ? process.env.STORYBOOK_GOOGLE_MAPS_API_KEY
    : false
  if (!googlePlacesApiKey) return [false, new Error('Maps API key missing')]
  return useScript({
    src: googlePlacesApiKey
      ? `https://maps.googleapis.com/maps/api/js?key=${googlePlacesApiKey}&libraries=places`
      : null,
    checkForExisting: true,
  })
}
