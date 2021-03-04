import React, { FC } from 'react'
import clsx from 'clsx'

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { TopBar } from 'src/components/layout/top-bar'
import { Sidebar } from 'src/components/layout/side-bar'

import { User } from '@generated/type-graphql'

const sidebarWidth = 50

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
    paddingLeft: sidebarWidth + theme.spacing(2),
  },
}))

export interface LayoutProps {
  user?: User
  children: any
}

export const Layout: FC<LayoutProps> = ({ user, children }) => {
  const classes = useStyles()

  return (
    <>
      <TopBar user={user} />
      {user && <Sidebar width={sidebarWidth} />}
      <Container
        className={clsx(
          classes.container,
          user && classes.containerWithSidebar
        )}
      >
        {children}
      </Container>
    </>
  )
}
