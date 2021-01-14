import React from 'react'
import { IconButton } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

export interface ProfileButtonProps {
  /**
   * Action to perform on click
   */
  onClick: () => void
}

export const ProfileButton = ({ onClick }) => (
  <IconButton color="inherit" onClick={onClick}>
    <AccountCircle />
  </IconButton>
)
