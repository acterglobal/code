import React, { FC } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { SessionIndicator } from 'src/components/layout/session-indicator'

const useStyles = makeStyles((theme) => ({
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
}))

export const TopBar: FC = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.titleBar}>
          <div className={classes.titleLogo}>
            <Typography variant="h1" className={classes.title}>
              Acter
            </Typography>
          </div>
          <div>
            <SessionIndicator />
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}
