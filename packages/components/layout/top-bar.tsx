import React, { FC } from 'react'

import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { SessionIndicator } from '@acter/components/molecules/session-indicator'

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

export const TopBar: FC = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <div>
            <SessionIndicator />
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ height: 50 }}></div>
    </>
  )
}
