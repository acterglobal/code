import React, { FC } from 'react'

import {
  IconButton,
  createStyles,
  makeStyles,
  Theme,
  MenuItem,
} from '@material-ui/core'
import { MoreHoriz as DotsIcon } from '@material-ui/icons'

import { DropdownMenu } from '@acter/components/util/dropdown-menu'
import { useUpdateActerConnection } from '@acter/lib/acter/use-update-connection'
import { ActerConnection, ActerConnectionRole } from '@acter/schema'

const { ADMIN, MEMBER, REJECTED } = ActerConnectionRole
export interface ConnectionStateProps {
  connection: ActerConnection
  canEdit: boolean
}

export const ConnectionUpdateOptions: FC<ConnectionStateProps> = ({
  connection,
  canEdit,
}) => {
  const classes = useStyles()

  if (!canEdit) return null

  return (
    <DropdownMenu
      anchorNode={
        <IconButton disableRipple className={classes.iconButton}>
          <DotsIcon fontSize="small" />
        </IconButton>
      }
    >
      {connection.role === ADMIN && (
        <>
          <ActionItem
            label="Remove as Admin"
            connection={connection}
            updateRole={MEMBER}
          />
          <ActionItem
            label="Remove as Member"
            connection={connection}
            updateRole={REJECTED}
          />
        </>
      )}
      {connection.role === MEMBER && (
        <>
          <ActionItem
            label="Make as Admin"
            connection={connection}
            updateRole={ADMIN}
          />
          <ActionItem
            label="Remove as Member"
            connection={connection}
            updateRole={REJECTED}
          />
        </>
      )}
    </DropdownMenu>
  )
}

type ActionItemProps = {
  label: string
  connection: ActerConnection
  updateRole: ActerConnectionRole
}
const ActionItem: FC<ActionItemProps> = ({ label, connection, updateRole }) => {
  const classes = useStyles()
  const [_, updateConnection] = useUpdateActerConnection()

  const handleClick = () => updateConnection(connection, updateRole)

  return (
    <MenuItem className={classes.menuItem} onClick={handleClick}>
      {label}
    </MenuItem>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButton: {
      width: theme.spacing(6),
      backgroundColor: theme.colors.grey.extraLight,
      borderRadius: 5,
      height: theme.spacing(3.5),
    },
    menuItem: {
      margin: theme.spacing(1),
      fontSize: '0.8rem',
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.colors.white,
      },
    },
  })
)
