import React, {
  FC,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react'
import { useIntercom } from 'react-use-intercom'

import {
  Box,
  Container,
  createStyles,
  Drawer,
  DrawerProps,
  Hidden,
  makeStyles,
  Theme,
  useMediaQuery,
} from '@material-ui/core'

import clsx from 'clsx'

import { CookieBar } from '@acter/components/molecules/cookie-bar'
import { BottomBar } from '@acter/components/organisms/bottom-bar'
import { Sidebar } from '@acter/components/organisms/side-bar'

export type LayoutProps = {
  secondarySidebar?: () => ReactNode
}

export const OverallLayout: FC<LayoutProps> = ({
  children,
  secondarySidebar,
}) => {
  const classes = useStyles()
  const [isMenuOpen, setMenuOpen] = useState(true)
  const [menuVariant, setMenuVariant] = useState<DrawerProps['variant']>(
    'permanent'
  )
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('xs')
  )

  useEffect(() => {
    setMenuOpen(!isSmallScreen)
    setMenuVariant(isSmallScreen ? 'temporary' : 'permanent')
  }, [isSmallScreen])

  const { boot } = useIntercom()

  useEffect(() => {
    boot()
  }, [])

  const secondSidebar = secondarySidebar?.()
  const drawerWidthClassName = secondSidebar
    ? classes.drawerWide
    : classes.drawerNarrow

  const handleDrawerClick = (evt: SyntheticEvent) => {
    if ((evt.target as HTMLElement).closest?.('a')) setMenuOpen(false)
  }

  return (
    <div className={classes.root}>
      <Drawer
        variant={menuVariant}
        anchor="left"
        open={isMenuOpen}
        onClose={() => setMenuOpen(false)}
        onClick={handleDrawerClick}
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
      <Hidden smUp>
        <div className={classes.bottomBar}>
          <BottomBar onOpen={() => setMenuOpen(!isMenuOpen)} />
        </div>
      </Hidden>
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
    bottomBar: {
      zIndex: theme.zIndex.drawer,
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
