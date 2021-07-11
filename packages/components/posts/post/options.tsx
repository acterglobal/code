import React, { FC } from 'react'
import { Box, MenuItem, makeStyles, createStyles } from '@material-ui/core'
import { MoreVert as ThreeDotsIcon } from '@material-ui/icons'
import { DropdownMenu } from '@acter/components/util/dropdown-menu'
import { theme } from '@acter/components/themes/acter-theme'

export interface PostOptionsProps {
  onEdit: () => void
  onDelete: () => void
}

export const PostOptions: FC<PostOptionsProps> = ({ onEdit, onDelete }) => {
  const classes = useStyles()
  return (
    <Box>
      <DropdownMenu
        anchorNode={<ThreeDotsIcon className={classes.threeDotsIcon} />}
        closeOnClick
      >
        <MenuItem className={classes.menuItem} onClick={onEdit}>
          Edit
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={onDelete}>
          Delete
        </MenuItem>
      </DropdownMenu>
    </Box>
  )
}

const useStyles = makeStyles(
  createStyles({
    threeDotsIcon: {
      color: theme.colors.grey.main,
      cursor: 'pointer',
    },
    menuItem: {
      fontSize: '0.8rem',
      textTransform: 'capitalize',
    },
  })
)
