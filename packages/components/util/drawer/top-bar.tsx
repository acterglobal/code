import React, { FC } from 'react'

import { Box, IconButton, MenuItem, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import {
  MoreVert as ThreeDotsIcon,
  Close as CloseIcon,
} from '@mui/icons-material'

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
  handleClose?: () => void
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
        {actionButtons && acter?.createdByUserId === user?.id && (
          <DropdownMenu anchorNode={<ThreeDots />}>
            {actionButtons.map((action, index) => (
              <MenuItem
                key={`menu-${action}-${index}`}
                className={classes.menuItem}
                onClick={() => setAction(action)}
              >
                {capitalize(action)}
              </MenuItem>
            ))}
          </DropdownMenu>
        )}

        <IconButton className={classes.button} onClick={handleClose} size="large">
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

const ThreeDots: FC = () => {
  const classes = useStyles()
  return (
    <IconButton size="large">
      <ThreeDotsIcon className={classes.threeDots} />
    </IconButton>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: theme.spacing(6.2),
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
