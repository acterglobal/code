import React, { FC } from 'react'

import { Box, IconButton, MenuItem, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  MoreVert as ThreeDotsIcon,
  Close as CloseIcon,
} from '@material-ui/icons'

import { DropdownMenu } from '@acter/components/util/dropdown-menu'
import { ActionButton } from '@acter/lib/constants'
import { capitalize } from '@acter/lib/string/capitalize'
import { useUser } from '@acter/lib/user/use-user'
import { Acter } from '@acter/schema'

export interface TopBarProps {
  heading?: string
  actionButtons?: ActionButton[]
  setAction?: React.Dispatch<React.SetStateAction<ActionButton>>
  acter?: Acter
  handleClose: () => void
}

export const TopBar: FC<TopBarProps> = ({
  heading,
  actionButtons,
  acter,
  handleClose,
  setAction,
}) => {
  const classes = useStyles()
  const { user } = useUser()

  return (
    <Box className={classes.root}>
      <Typography variant="body1" className={classes.heading}>
        {capitalize(heading)}
      </Typography>

      <Box className={classes.buttonsSection}>
        {acter && user && actionButtons && acter.createdByUserId === user.id ? (
          <DropdownMenu anchorNode={<ThreeDots />}>
            {actionButtons.map((action) => (
              <MenuItem
                className={classes.menuItem}
                onClick={() => setAction(action)}
              >
                {capitalize(action)}
              </MenuItem>
            ))}
          </DropdownMenu>
        ) : (
          <ThreeDots />
        )}

        <IconButton className={classes.button} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

const ThreeDots: FC = () => {
  const classes = useStyles()
  return (
    <IconButton>
      <ThreeDotsIcon className={classes.threeDots} />
    </IconButton>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: theme.spacing(5.5),
      padding: 5,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
    heading: {
      marginLeft: theme.spacing(3),
    },
    buttonsSection: {
      display: 'flex',
      alignItems: 'center',
    },
    button: {
      textTransform: 'none',
      height: 30,
      fontSize: '0.8rem',
      color: theme.palette.secondary.contrastText,
      borderColor: theme.palette.secondary.contrastText,
    },
    menuItem: {
      fontSize: '0.8rem',
      display: 'flex',
      justifyContent: 'center',
    },
    threeDots: {
      color: theme.palette.secondary.contrastText,
    },
  })
)
