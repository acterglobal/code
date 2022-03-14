import React, { FC } from 'react'

import { MoreVert as ThreeDotsIcon } from '@mui/icons-material'
import { MenuItem } from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { blueGrey } from '@acter/components/themes/colors'
import { DropdownMenu } from '@acter/components/util/dropdown-menu'
import { capitalize } from '@acter/lib/string/capitalize'

export interface PostOptionsProps {
  onEdit: () => void
  onDelete: () => void
  isAuthor: boolean
}

export const PostOptions: FC<PostOptionsProps> = ({
  onEdit,
  onDelete,
  isAuthor,
}) => {
  const classes = useStyles()

  return (
    <DropdownMenu
      anchorNode={<ThreeDotsIcon className={classes.threeDotsIcon} />}
      closeOnClick
    >
      {isAuthor && (
        <MenuItem className={classes.menuItem} onClick={onEdit}>
          {capitalize('Edit')}
        </MenuItem>
      )}

      <MenuItem className={classes.menuItem} onClick={onDelete}>
        {capitalize('Delete')}
      </MenuItem>
    </DropdownMenu>
  )
}

const useStyles = makeStyles(
  createStyles({
    threeDotsIcon: {
      color: blueGrey.A200,
      cursor: 'pointer',
    },
    menuItem: {
      fontSize: '0.8rem',
    },
  })
)
