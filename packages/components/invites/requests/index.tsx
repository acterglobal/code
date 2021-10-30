import React, { FC } from 'react'

import {
  capitalize,
  createStyles,
  List,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { Request } from '@acter/components/invites/requests/request'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { ActerConnectionRole } from '@acter/schema'

const { PENDING } = ActerConnectionRole

export const Requests: FC = () => {
  const classes = useStyles()
  const { acter, fetching: acterLoading } = useActer()

  if (acterLoading) return <LoadingSpinner />
  if (!acter) return null

  const requests = acter.Followers.filter(({ role }) => role === PENDING)

  return (
    <>
      {requests.length === 0 ? (
        <Typography className={classes.zeroMessage}>
          {`${capitalize(acter.name)} has no new joining requests.`}
        </Typography>
      ) : (
        <List className={classes.list}>
          {requests.map((request) => (
            <Request request={request} />
          ))}
        </List>
      )}
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    zeroMessage: {
      marginTop: theme.spacing(7),
      fontSize: '0.85rem',
      textAlign: 'center',
      color: theme.colors.grey.dark,
    },
    list: {
      marginTop: theme.spacing(3),
    },
  })
)
