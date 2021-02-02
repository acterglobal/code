import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { SessionIndicator } from 'src/components/layout/session-indicator'

import { User } from '@generated/type-graphql'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'white',
    color: theme.palette.primary.main,
    zIndex: theme.zIndex.drawer + 1,
  },
  titleLogo: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: '2rem',
  },
}))

export interface TopBarProps {
  user?: User
}

export const TopBar: FC<TopBarProps> = ({ user }) => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <div className={classes.titleLogo}>
            <Image
              src="/acter-logo-32.png"
              alt="Acter Logo"
              width={32}
              height={32}
            />
            <Typography variant="h1" className={classes.title}>
              Acter
            </Typography>
          </div>
          <div>
            <SessionIndicator user={user} />
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}
