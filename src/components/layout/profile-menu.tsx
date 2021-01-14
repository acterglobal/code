import React from 'react'
import {
  Button,
  IconButton,
  Link,
  ListItemText,
  Menu,
  MenuItem,
} from '@material-ui/core'

export interface ProfileMenuProps {
  /**
   * Anchor Element
   */
  menuAnchorEl: any
  /**
   * Text to display for signed in user
   */
  signedInAs: string
  /**
   * Whether the menu should be open or closed
   */
  isMenuOpen: boolean
  /**
   * Close event handler
   */
  onCloseMenu: () => void
  /**
   * Sign out handler
   */
  onSignOut: () => void
}

export const ProfileMenu = ({
  menuAnchorEl,
  isMenuOpen,
  signedInAs,
  onCloseMenu,
  onSignOut,
}: ProfileMenuProps) => (
  <Menu anchorEl={menuAnchorEl} open={isMenuOpen} onClose={onCloseMenu}>
    <ListItemText>Signed in as {signedInAs}</ListItemText>
    <MenuItem onClick={() => onCloseMenu}>
      <Link href="/profile">Edit Profile</Link>
    </MenuItem>
    <MenuItem
      onClick={() => {
        onSignOut()
        onCloseMenu()
      }}
    >
      Sign Out
    </MenuItem>
  </Menu>
)
