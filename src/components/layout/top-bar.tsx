import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { SessionIndicator } from 'src/components/layout/session-indicator'

import { User } from '@generated/type-graphql'
import { relative } from 'path'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'white',
    color: theme.palette.primary.main,
    zIndex: theme.zIndex.drawer + 1,
  },
  toolBar: {
    paddingLeft: theme.spacing(1),
  },
  link: {
    display: 'flex',
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
  titleLogo: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
  },
  logo: {
    width: 32,
    height: 32,
    position: 'relative',
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
        <Toolbar className={classes.toolBar}>
          <div className={classes.titleLogo}>
            <Link href="/">
              <a className={classes.link}>
                <Image
                  src="/assets/acter-logo-32.png"
                  alt="Acter Logo"
                  layout="intrinsic"
                  width={32}
                  height={32}
                />
                <Typography variant="h1" className={classes.title}>
                  Acter
                </Typography>
              </a>
            </Link>
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
