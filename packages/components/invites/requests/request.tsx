import React, { FC } from 'react'

import {
  Box,
  createStyles,
  ListItem,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { Action } from '@acter/components/invites/requests/action'
import { ActerTypes } from '@acter/lib/constants'
import { InviteActions } from '@acter/lib/constants'
import { ActerConnection as RequestType } from '@acter/schema'

const { USER } = ActerTypes
const { APPROVE, REJECT } = InviteActions

export interface RequestProps {
  request: RequestType
}

export const Request: FC<RequestProps> = ({ request }) => {
  const classes = useStyles()

  const { name: followerName, ActerType, createdByUser } = request.Follower

  return (
    <ListItem>
      <Box className={classes.details}>
        <Typography className={classes.name}>{followerName}</Typography>
        {ActerType.name !== USER && (
          <Box style={{ display: 'flex' }}>
            <Typography className={classes.by}>By:</Typography>
            <Typography className={classes.byActer}>
              {createdByUser.Acter.name}
            </Typography>
          </Box>
        )}
      </Box>

      <Box className={classes.actions}>
        <Action action={REJECT} request={request} />
        <Action action={APPROVE} request={request} />
      </Box>
    </ListItem>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    details: {
      width: '100%',
    },
    name: {
      fontSize: '0.85rem',
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.secondary.dark,
    },
    by: {
      fontSize: '0.8rem',
      fontStyle: 'italic',
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.secondary.main,
      marginRight: theme.spacing(0.5),
    },
    byActer: {
      fontSize: '0.8rem',
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.colors.grey.main,
    },
    actions: {
      width: '50%',
      display: 'flex',
      justifyContent: 'space-between',
    },
  })
)
