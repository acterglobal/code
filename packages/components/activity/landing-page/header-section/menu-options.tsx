import React, { FC } from 'react'

import { MenuItem, makeStyles, createStyles } from '@material-ui/core'
import { MoreVert as ThreeDotsIcon } from '@material-ui/icons'

import { theme } from '@acter/components/themes/acter-theme'
import { DropdownMenu } from '@acter/components/util/dropdown-menu'
import { capitalize } from '@acter/lib/string/capitalize'

export interface MenuOptionsProps {
  onEdit: () => void
  onDelete: () => void
}

export const MenuOptions: FC<MenuOptionsProps> = ({ onEdit, onDelete }) => {
  const classes = useStyles()
  return (
    <DropdownMenu
      anchorNode={<ThreeDotsIcon className={classes.threeDotsIcon} />}
      closeOnClick
    >
      <MenuItem className={classes.menuItem} onClick={onEdit}>
        {capitalize('Edit')}
      </MenuItem>
      <MenuItem className={classes.menuItem} onClick={onDelete}>
        {capitalize('Delete')}
      </MenuItem>
    </DropdownMenu>
  )
}

const useStyles = makeStyles(
  createStyles({
    threeDotsIcon: {
      color: theme.palette.secondary.contrastText,
      cursor: 'pointer',
      justifyContent: 'center',
      marginTop: 5,
    },
    menuItem: {
      fontSize: '0.8rem',
      display: 'flex',
      justifyContent: 'center',
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.contrastText,
      },
    },
  })
)
