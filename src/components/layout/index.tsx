import React, { FC } from 'react'
import clsx from 'clsx'

import { Container, createStyles, makeStyles, Theme } from '@material-ui/core'
import { TopBar } from 'src/components/layout/top-bar'
import { Sidebar } from 'src/components/layout/side-bar'
import { Head } from 'src/components/layout/head'

import { User } from '@schema'

const sidebarWidth = 50

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minWidth: 375 - sidebarWidth,
    },
    containerWithSidebar: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      paddingLeft: sidebarWidth + theme.spacing(1),
      paddingRight: 0,
    },
  })
)

export interface LayoutProps {
  user?: User
  children: any
  headTitle: string
}

export const Layout: FC<LayoutProps> = ({ headTitle, user, children }) => {
  const classes = useStyles()

  return (
    <>
      <Head title={headTitle} />
      <TopBar user={user} />
      {user && <Sidebar width={sidebarWidth} />}
      <Container
        maxWidth="xl"
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
