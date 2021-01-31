import React, { FC } from 'react'
import clsx from 'clsx'

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { TopBar } from 'src/components/layout/top-bar'
import { SideBar } from 'src/components/layout/side-bar'

import { User } from '@generated/type-graphql'

const sidebarWidth = 240

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  containerWithSidebar: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: sidebarWidth,
  },
}))

export interface LayoutProps {
  loggedInUser?: User
  children: any
}

export const Layout: FC<LayoutProps> = ({ loggedInUser, children }) => {
  const classes = useStyles()

  return (
    <>
      <TopBar user={loggedInUser} />
      {loggedInUser && <SideBar width={sidebarWidth} />}
      <Container
        className={clsx(
          classes.container,
          loggedInUser && classes.containerWithSidebar
        )}
      >
        {children}
      </Container>
    </>
  )
}
