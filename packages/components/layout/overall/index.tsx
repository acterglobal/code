import React, { FC, ReactNode, useEffect } from 'react'
import { useIntercom } from 'react-use-intercom'

import { Container, createStyles, makeStyles } from '@material-ui/core'

import { CookieBar } from '@acter/components/molecules/cookie-bar'
import { Sidebar } from '@acter/components/organisms/side-bar'

export type LayoutProps = {
  secondarySidebar?: () => ReactNode
}

export const OverallLayout: FC<LayoutProps> = ({
  children,
  secondarySidebar,
}) => {
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
