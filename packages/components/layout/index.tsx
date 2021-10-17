import React, { FC, ReactNode, useEffect } from 'react'
import CookieConsent from 'react-cookie-consent'
import { useIntercom } from 'react-use-intercom'

import { Container, createStyles, makeStyles } from '@material-ui/core'

import { Sidebar } from '@acter/components/layout/side-bar'
import { TopBar } from '@acter/components/layout/top-bar'

export type LayoutProps = {
  secondarySidebar?: () => ReactNode
}

export const Layout: FC<LayoutProps> = ({ children, secondarySidebar }) => {
  const classes = useStyles()

  const { boot } = useIntercom()

  useEffect(() => {
    boot()
  }, [])

  return (
    <div className={classes.root}>
      <Sidebar />
      {secondarySidebar?.()}
      <Container maxWidth="xl" className={classes.container}>
        <TopBar />
        {children}
        <CookieConsent style={{ width: '30%', alignItems: 'flex-end' }}>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </Container>
    </div>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
    },
    container: {
      flexGrow: 1,
      margin: '0 auto',
      padding: 0,
    },
  })
)
