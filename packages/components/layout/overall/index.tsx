import React, { FC, ReactNode, useEffect } from 'react'
import { useIntercom } from 'react-use-intercom'

import {
  Container,
  createStyles,
  Drawer,
  makeStyles,
  Theme,
} from '@material-ui/core'

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
      <Drawer
        variant="permanent"
        anchor="left"
        open={true}
        className={classes.drawer}
      >
        <Sidebar />
        {secondarySidebar?.()}
      </Drawer>
      <Container maxWidth="xl" className={classes.container}>
        {children}
        <CookieBar />
      </Container>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
    },
    drawer: {
      width: theme.spacing(theme.mixins.sidebar.primaryWidth),
      flexShrink: 0,
    },
    container: {
      flexGrow: 1,
      margin: '0 auto',
      padding: 0,
    },
  })
)
