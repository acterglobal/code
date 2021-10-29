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
import { Actions } from '@acter/lib/constants'
import { capitalize } from '@acter/lib/string/capitalize'
import { ActerConnection as RequestType } from '@acter/schema'

const { USER } = ActerTypes
const { APPROVE, REJECT } = Actions

export interface RequestProps {
  request: RequestType
}

export const Request: FC<RequestProps> = ({ request }) => {
  const classes = useStyles()

  const { name: followerName, ActerType, createdByUser } = request.Follower

  return (
    <ListItem className={classes.item}>
      <Box className={classes.details}>
        <Typography className={classes.name}>
          {capitalize(followerName)}
        </Typography>
        {ActerType.name !== USER && (
          <Box style={{ display: 'flex' }}>
            <Typography className={classes.joinAs}>By:</Typography>
            <Typography className={classes.by}>
              {capitalize(createdByUser.Acter.name)}
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
    item: {
      margin: theme.spacing(0.5),
    },
    details: {
      width: '100%',
    },
    name: {
      fontSize: '0.85rem',
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
    by: {
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
