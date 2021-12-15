import React, { FC, ReactNode, useEffect } from 'react'
import { useIntercom } from 'react-use-intercom'

import {
  Box,
  Container,
  createStyles,
  Drawer,
  makeStyles,
  Theme,
} from '@material-ui/core'

import clsx from 'clsx'

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

  const secondSidebar = secondarySidebar?.()
  const drawerWidthClassName = secondSidebar
    ? classes.drawerWide
    : classes.drawerNarrow

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        anchor="left"
        open={true}
        classes={{
          root: clsx(classes.drawer, drawerWidthClassName),
          paper: drawerWidthClassName,
        }}
      >
        <Box className={classes.sidebarContainer}>
          <Sidebar />
          {secondSidebar}
        </Box>
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
      flexShrink: 0,
    },
    drawerNarrow: {
      width: theme.spacing(theme.mixins.sidebar.primaryWidth),
    },
    drawerWide: {
      width: theme.spacing(
        theme.mixins.sidebar.primaryWidth + theme.mixins.sidebar.secondaryWidth
      ),
    },
    sidebarContainer: {
      height: '100%',
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
