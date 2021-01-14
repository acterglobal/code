import React from 'react'
import {
  Button,
  IconButton,
  Link,
  ListItemText,
  Menu,
  MenuItem,
} from '@material-ui/core'

export interface SessionMenuProps extends React.HTMLAttributes<HTMLDivElement> {
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

export const SessionMenu = ({
  menuAnchorEl,
  isMenuOpen,
  signedInAs,
  onCloseMenu,
  onSignOut,
}: SessionMenuProps) => (
  <Menu
    anchorEl={menuAnchorEl}
    open={isMenuOpen}
    onClose={onCloseMenu}
    aria-label="session-menu"
  >
    <ListItemText>Signed in as {signedInAs}</ListItemText>
    <MenuItem>
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
