import React, { FC } from 'react'

import {
  Box,
  Button,
  createStyles,
  ListItem,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from '@material-ui/core'

import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useUpdateActerConnection } from '@acter/lib/acter/use-update-connection'
import { ActerTypes } from '@acter/lib/constants'
import { capitalize } from '@acter/lib/string/capitalize'
import {
  ActerConnection as RequestType,
  ActerConnectionRole,
} from '@acter/schema'

const { MEMBER, REJECTED } = ActerConnectionRole
const { USER } = ActerTypes

export interface RequestProps {
  request: RequestType
}

export const Request: FC<RequestProps> = ({ request }) => {
  const classes = useStyles()
  const theme = useTheme()

  const { name: followerName, ActerType, createdByUser } = request.Follower
  const name = ActerType.name === USER ? followerName : createdByUser.Acter.name
  const joiningAs = ActerType.name === USER ? 'Individual' : followerName

  const [
    updateActerConnection,
    { loading: updatingConnection },
  ] = useUpdateActerConnection()

  const handleApprove = () => updateActerConnection(request, MEMBER)
  const handleReject = () => updateActerConnection(request, REJECTED)

  if (updatingConnection) return <LoadingSpinner />

  return (
    <ListItem className={classes.item}>
      <Box className={classes.details}>
        <Typography className={classes.name}>{capitalize(name)}</Typography>
        <Box style={{ display: 'flex' }}>
          <Typography className={classes.joinAs}>Join as:</Typography>
          <Typography className={classes.acter}>
            {capitalize(joiningAs)}
          </Typography>
        </Box>
      </Box>

      <Box className={classes.actions}>
        <Button
          color="inherit"
          style={{ color: theme.colors.red }}
          className={classes.action}
          onClick={handleReject}
        >
          Reject
        </Button>
        <Button
          color="inherit"
          style={{ color: theme.palette.primary.main }}
          className={classes.action}
          onClick={handleApprove}
        >
          Approve
        </Button>
      </Box>
    </ListItem>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      margin: theme.spacing(1),
    },
    details: {
      width: '100%',
    },
    name: {
      fontSize: '0.8rem',
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.secondary.dark,
    },
    joinAs: {
      fontSize: '0.8rem',
      fontStyle: 'italic',
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.secondary.main,
      marginRight: theme.spacing(0.5),
    },
    acter: {
      fontSize: '0.8rem',
      fontWeight: theme.typography.fontWeightBold,
      color: theme.colors.grey.main,
    },
    actions: {
      width: '50%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    action: {
      textTransform: 'capitalize',
      fontSize: '0.85rem',
    },
  })
)
