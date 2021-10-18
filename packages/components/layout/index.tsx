import React, { FC, ReactNode, useEffect } from 'react'
import { useIntercom } from 'react-use-intercom'

import { Container, createStyles, makeStyles } from '@material-ui/core'

import { CookieBar } from '@acter/components/layout/cookie-bar'
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
        <CookieBar />
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
