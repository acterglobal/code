import React, { MouseEvent, useState } from 'react'

import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { UserSession } from 'src/components/layout/user-session'

interface LayoutProps {
  children: any
}

const useStyles = makeStyles({
  titleBar: {
    color: 'white',
  },
  titleLogo: {
    flexGrow: 1,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: '2rem',
  },
})

export const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="relative">
        <Toolbar className={classes.titleBar}>
          <div className={classes.titleLogo}>
            <Typography variant="h1" className={classes.title}>
              Acter
            </Typography>
          </div>
          <div>
            <UserSession />
          </div>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </>
  )
}
