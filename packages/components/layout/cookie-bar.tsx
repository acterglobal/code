import React, { FC } from 'react'
import CookieConsent from 'react-cookie-consent'

export const CookieBar: FC = () => {
  return (
    <CookieConsent style={{ zIndex: 1300 }}>
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  )
}
