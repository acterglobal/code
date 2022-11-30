import React, { FC } from 'react'
import CookieConsent from 'react-cookie-consent'

import Link from 'next/link'

import { makeStyles, Theme } from '@material-ui/core/styles'

export const CookieBar: FC = () => {
  const classes = useStyles()
  return (
    <CookieConsent
      style={{ zIndex: 1300 }}
      buttonStyle={{ marginRight: '7rem' }}
    >
      This website uses cookies to enhance the user experience.
      <Link href={'https://www.acter.global/privacy-policy'}>
        <a className={classes.link} target="_blank">
          {' '}
          You can click here to read our Privacy Policy.
        </a>
      </Link>
    </CookieConsent>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    color: theme.colors.white,
    textDecoration: 'none',
  },
}))
