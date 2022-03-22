import React, { FC } from 'react'

import { Button, createStyles, makeStyles, Theme } from '@material-ui/core'

import clsx from 'clsx'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { useUpdateActerConnection } from '@acter/lib/acter/use-update-connection'
import { InviteActions } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import {
  ActerConnection as RequestType,
  ActerConnectionRole,
} from '@acter/schema'

const { MEMBER, REJECTED } = ActerConnectionRole

interface ActionProps {
  action: InviteActions
  request: RequestType
}

export const Action: FC<ActionProps> = ({ action, request }) => {
  const classes = useStyles()
  const { t } = useTranslation('invitations')

  const [{ fetching: updatingConnection }, updateActerConnection] =
    useUpdateActerConnection()

  const handleClick = () => {
    const role = action === InviteActions.APPROVE ? MEMBER : REJECTED
    updateActerConnection(request, role)
  }

  return (
    <Button
      color="inherit"
      className={clsx(classes.action, classes[action])}
      onClick={handleClick}
    >
      {updatingConnection ? (
        <LoadingSpinner size={13} thickness={5} />
      ) : (
        t(action)
      )}
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
