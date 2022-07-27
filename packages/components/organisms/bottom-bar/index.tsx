import React, { FC } from 'react'

import {
  AppBar,
  createStyles,
  IconButton,
  makeStyles,
  Toolbar,
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

import { ProfileButton } from '@acter/components/molecules/profile-button'

export interface BottomBarProps {
  onOpen: () => void
}

export const BottomBar: FC<BottomBarProps> = ({ onOpen }) => {
  const classes = useStyles()
  return (
    <AppBar position="fixed" color="secondary" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => onOpen()}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.grow} />
        <ProfileButton />
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
  })
)
