import React, { FC } from 'react'
import { IconButton } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

export const ProfileButton: FC = () => (
  <IconButton color="inherit" aria-label="profile-button">
    <AccountCircle />
  </IconButton>
)
