import React, { FC } from 'react'

import { MenuItem } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import { MoreVert as ThreeDotsIcon } from '@mui/icons-material'

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
