import React, { MouseEvent, useState, FC, ReactNode } from 'react'
import { Menu } from '@material-ui/core'

interface DropdownMenuProps {
  anchorNode: ReactNode
  children: any
}
export const DropdownMenu: FC<DropdownMenuProps> = ({
  anchorNode,
  children,
}) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null)
  const openMenu = (evt: MouseEvent) => setMenuAnchorEl(evt.currentTarget)
  const closeMenu = () => {
    setMenuAnchorEl(null)
  }

  return (
    <>
      <div onClick={openMenu}>{anchorNode}</div>
      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={closeMenu}
        onClick={closeMenu}
      >
        {children}
      </Menu>
    </>
  )
}
