import React, { FC } from 'react'

import { AppBar, IconButton, Toolbar } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { Menu as MenuIcon } from '@mui/icons-material'

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
          size="large">
          <MenuIcon />
        </IconButton>
        <div className={classes.grow} />
        <ProfileButton
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        />
      </Toolbar>
    </AppBar>
  );
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
