import React, { FC, useEffect, useState } from 'react'

import { Button, createStyles, makeStyles, Theme } from '@material-ui/core'

import clsx from 'clsx'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { InviteActions } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useUpdateInvite } from '@acter/lib/invites/use-update-invite'
import { Invite } from '@acter/schema'

const { CANCEL } = InviteActions
interface ActionProps {
  action: InviteActions
  invite: Invite
}

export const Action: FC<ActionProps> = ({ action, invite }) => {
  const { t } = useTranslation('invitations')
  const classes = useStyles()
  const [loading, setLoading] = useState(false)

  const [{ fetching: updating }, updateInvite] = useUpdateInvite()

  useEffect(() => {
    setLoading(updating)
  }, [updating])

  const handleCancel = () =>
    updateInvite({ inviteId: invite.id, expiredAt: new Date() })

  const handleResend = () =>
    updateInvite({ inviteId: invite.id, expiredAt: null })

  return (
    <Button
      color="inherit"
      className={clsx(classes.action, classes[action])}
      onClick={action === CANCEL ? handleCancel : handleResend}
      disabled={action === CANCEL && invite.expiredAt ? true : false}
    >
      {loading ? <LoadingSpinner size={13} thickness={5} /> : t(action)}
    </Button>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    action: {
      textTransform: 'capitalize',
      fontSize: '0.85rem',
    },
    cancel: {
      color: theme.colors.grey.dark,
    },
    resend: {
      color: theme.palette.primary.main,
    },
  })
)
