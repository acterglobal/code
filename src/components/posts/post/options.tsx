import React, { FC } from 'react'
import { Box, MenuItem, makeStyles, createStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { MoreVert as ThreeDotsIcon } from '@material-ui/icons'
import { DropdownMenu } from 'src/components/util/dropdown-menu'

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
      color: grey[600],
      cursor: 'pointer',
    },
    menuItem: {
      fontSize: '0.8rem',
      textTransform: 'capitalize',
    },
  })
)
