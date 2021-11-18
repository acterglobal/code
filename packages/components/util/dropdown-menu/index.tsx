import React, { MouseEvent, useState, FC, ReactNode } from 'react'

import { Menu, createStyles, makeStyles, Theme } from '@material-ui/core'

const REGULAR_WIDTH = 20
const LARGE_WIDTH = 30

type Size = 'regular' | 'large'

interface DropdownMenuProps {
  anchorNode: ReactNode
  closeOnClick?: boolean
  size?: Size
  children: ReactNode
}
export const DropdownMenu: FC<DropdownMenuProps> = ({
  anchorNode,
  closeOnClick = true,
  size = 'regular',
  children,
}) => {
  const classes = useStyles({
    size: size === 'regular' ? REGULAR_WIDTH : LARGE_WIDTH,
  })
  const [menuAnchorEl, setMenuAnchorEl] = useState(null)
  const openMenu = (evt: MouseEvent) => setMenuAnchorEl(evt.currentTarget)
  const closeMenu = () => {
    setMenuAnchorEl(null)
  }

  return (
    <div>
      <div onClick={openMenu}>{anchorNode}</div>
      <Menu
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        getContentAnchorEl={null}
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={closeMenu}
        onClick={closeOnClick ? closeMenu : null}
        classes={{ paper: classes.paper }}
      >
        {children}
      </Menu>
    </div>
  )
}

type StyleProps = {
  size: number
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    paper: {
      minWidth: ({ size }) => theme.spacing(size),
      borderRadius: theme.spacing(0.8),
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: theme.palette.secondary.main,
      boxShadow: 'none',
    },
  })
)
