import React, { MouseEvent, useState, FC, ReactNode } from 'react'
import {
  Menu,
  MenuProps,
  withStyles,
  createStyles,
  Theme,
} from '@material-ui/core'
interface DropdownMenuProps {
  anchorNode: ReactNode
  closeOnClick?: boolean
  children: React.ReactNode
}
export const DropdownMenu: FC<DropdownMenuProps> = ({
  anchorNode,
  closeOnClick = true,
  children,
}) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null)
  const openMenu = (evt: MouseEvent) => setMenuAnchorEl(evt.currentTarget)
  const closeMenu = () => {
    setMenuAnchorEl(null)
  }

  return (
    <div>
      <div onClick={openMenu}>{anchorNode}</div>
      <StyledMenu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={closeMenu}
        onClick={closeOnClick ? closeMenu : null}
      >
        {children}
      </StyledMenu>
    </div>
  )
}

const StyledMenu = withStyles((theme: Theme) =>
  createStyles({
    paper: {
      minWidth: theme.spacing(20),
      borderRadius: theme.spacing(1),
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: theme.palette.divider,
    },
  })
)((props: MenuProps) => (
  <Menu
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    getContentAnchorEl={null}
    {...props}
  />
))
