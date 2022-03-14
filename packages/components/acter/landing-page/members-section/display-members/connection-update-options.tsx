import React, { FC } from 'react'

import { MoreHoriz as DotsIcon } from '@mui/icons-material'
import { IconButton, Theme, MenuItem } from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { blueGrey } from '@acter/components/themes/colors'
import { DropdownMenu } from '@acter/components/util/dropdown-menu'
import { useUpdateActerConnection } from '@acter/lib/acter/use-update-connection'
import { ActerConnection, ActerConnectionRole } from '@acter/schema'

const { ADMIN, MEMBER, REMOVED } = ActerConnectionRole
export interface ConnectionStateProps {
  connection: ActerConnection
  canEdit: boolean
}

export const ConnectionUpdateOptions: FC<ConnectionStateProps> = ({
  connection,
  canEdit,
}) => {
  const classes = useStyles()
  const [{ fetching: updatingConnection }, updateConnection] =
    useUpdateActerConnection()

  if (!canEdit) return null

  if (updatingConnection) return <LoadingSpinner thickness={4} />

  const handleClick = (role) => updateConnection(connection, role)

  return (
    <DropdownMenu
      anchorNode={
        <IconButton disableRipple className={classes.iconButton} size="large">
          <DotsIcon fontSize="small" />
        </IconButton>
      }
    >
      <MenuItem
        className={classes.menuItem}
        onClick={() => handleClick(connection.role === ADMIN ? MEMBER : ADMIN)}
      >
        {connection.role === ADMIN ? 'Remove as Admin' : 'Make as Admin'}
      </MenuItem>
      <MenuItem
        className={classes.menuItem}
        onClick={() => handleClick(REMOVED)}
      >
        Remove as Member
      </MenuItem>
    </DropdownMenu>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButton: {
      width: theme.spacing(6),
      backgroundColor: blueGrey.A100,
      borderRadius: 5,
      height: theme.spacing(3.5),
    },
    menuItem: {
      margin: theme.spacing(1),
      fontSize: '0.8rem',
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.background.paper,
      },
    },
  })
)
