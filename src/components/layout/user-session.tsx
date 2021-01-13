import { MouseEvent, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import {
  Button,
  CircularProgress,
  IconButton,
  Link,
  ListItemText,
  Menu,
  MenuItem,
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

export const UserSession = () => {
  const [session, loading] = useSession()
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null)
  const openUserMenu = (evt: MouseEvent) =>
    setUserMenuAnchorEl(evt.currentTarget)
  const closeUserMenu = () => {
    setUserMenuAnchorEl(null)
  }
  if (loading) {
    return <CircularProgress />
  }

  if (!session) {
    return (
      <Button color="inherit" onClick={() => signIn()}>
        Sign in
      </Button>
    )
  }

  return (
    <>
      <IconButton color="inherit" onClick={openUserMenu}>
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={userMenuAnchorEl}
        open={Boolean(userMenuAnchorEl)}
        onClose={closeUserMenu}
      >
        <ListItemText>Signed in as {session.user.email}</ListItemText>
        <MenuItem onClick={() => closeUserMenu}>
          <Link href="/profile">Edit Profile</Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            signOut()
            closeUserMenu()
          }}
        >
          Sign Out
        </MenuItem>
      </Menu>
    </>
  )
}
