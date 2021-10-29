import React, { FC } from 'react'

import { Button, createStyles, makeStyles, Theme } from '@material-ui/core'

import clsx from 'clsx'

import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useUpdateActerConnection } from '@acter/lib/acter/use-update-connection'
import { Actions } from '@acter/lib/constants'
import {
  ActerConnection as RequestType,
  ActerConnectionRole,
} from '@acter/schema'

const { MEMBER, REJECTED } = ActerConnectionRole

interface ActionProps {
  action: Actions
  request: RequestType
}

export const Action: FC<ActionProps> = ({ action, request }) => {
  const classes = useStyles()

  const [
    updateActerConnection,
    { loading: updatingConnection },
  ] = useUpdateActerConnection()

  const handleClick = () => {
    const role = action === Actions.APPROVE ? MEMBER : REJECTED
    updateActerConnection(request, role)
  }

  return (
    <Button
      color="inherit"
      className={clsx(classes.action, classes[action])}
      onClick={handleClick}
    >
      {updatingConnection ? <LoadingSpinner size={13} thickness={5} /> : action}
    </Button>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    action: {
      textTransform: 'capitalize',
      fontSize: '0.85rem',
    },
    approve: {
      color: theme.palette.primary.main,
    },
    reject: {
      color: theme.colors.red,
    },
  })
)
