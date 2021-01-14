import React, { MouseEvent } from 'react'
import { IconButton } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

export interface ProfileButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Action to perform on click
   */
  onClick: (MouseEvent) => void
}

export const ProfileButton = ({ onClick }: ProfileButtonProps) => (
  <IconButton color="inherit" onClick={onClick} aria-label="profile-button">
    <AccountCircle />
  </IconButton>
)
