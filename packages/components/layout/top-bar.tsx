import React, { FC } from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { SessionIndicator } from '@acter/components/layout/session-indicator'

import { User } from '@schema'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'white',
    color: theme.palette.primary.main,
    zIndex: theme.zIndex.drawer - 1,
    boxShadow: 'none',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 50,
  },
  link: {
    display: 'flex',
    color: theme.palette.primary.main,
    textDecoration: 'none',
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
          <div>
            <SessionIndicator user={user} />
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ height: 50 }}></div>
    </>
  )
}
