import React, { FC } from 'react'

import { Box, IconButton, MenuItem, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import {
  MoreVert as ThreeDotsIcon,
  Close as CloseIcon,
} from '@mui/icons-material'

import { Link } from '@acter/components/util/anchor-link'
import { DropdownMenu } from '@acter/components/util/dropdown-menu'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { capitalize } from '@acter/lib/string/capitalize'
import { Acter, User } from '@acter/schema'

export interface TopBarProps {
  heading?: string
  actionButtons?: string[] | null
  acter?: Acter
  user?: User
}
interface Props extends TopBarProps {
  handleClose: () => void
}

export const TopBar: FC<Props> = ({
  heading,
  actionButtons,
  acter,
  user,
  handleClose,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Typography variant="body1" className={classes.heading}>
        {capitalize(heading)}
      </Typography>

      <Box className={classes.buttonsSection}>
        {actionButtons && acter.createdByUserId === user?.id ? (
          <DropdownMenu anchorNode={<ThreeDots />}>
            {actionButtons.map((action) => (
              <Link href={acterAsUrl({ acter, extraPath: [action] })}>
                <MenuItem className={classes.menuItem}>
                  {capitalize(action)}
                </MenuItem>
              </Link>
            ))}
          </DropdownMenu>
        ) : (
          <ThreeDots />
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
