import React, { FC } from 'react'
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Typography,
} from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { MoreVert as ThreeDotsIcon } from '@material-ui/icons'
import { DropdownMenu } from 'src/components/util/dropdown-menu'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles(
  createStyles({
    root: {
      height: 40,
      padding: 5,
      //   backgroundColor: 'red',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonsSection: {
      display: 'flex',
      alignItems: 'center',
    },
    button: {
      textTransform: 'none',
      height: 30,
      fontSize: '0.8rem',
      color: grey[700],
    },
  })
)

interface TopBarProps {
  heading?: string
  handleClose: () => void
}

export const TopBar: FC<TopBarProps> = ({ heading, handleClose }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Typography variant="h6">{heading}</Typography>

      <Box className={classes.buttonsSection}>
        <DropdownMenu
          anchorNode={
            <IconButton>
              <ThreeDotsIcon />
            </IconButton>
          }
        >
          <MenuItem>Edit</MenuItem>
          <MenuItem>Delete</MenuItem>
        </DropdownMenu>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={handleClose}
        >
          Close
        </Button>
      </Box>
    </Box>
  )
}
