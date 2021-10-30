import React, { FC, useEffect, useState } from 'react'

import { Button, createStyles, makeStyles, Theme } from '@material-ui/core'

import axios from 'axios'
import clsx from 'clsx'
import { useSnackbar } from 'notistack'

import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { InviteActions } from '@acter/lib/constants'
import { useUpdateInvite } from '@acter/lib/invites/use-update-invte'
import { Invite } from '@acter/schema'

const { CANCEL } = InviteActions
interface ActionProps {
  action: InviteActions
  invite: Invite
}

export const Action: FC<ActionProps> = ({ action, invite }) => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setLoading] = useState(false)

  const [{ fetching: updating }, updateInvite] = useUpdateInvite({
    getSuccessMessage: () => 'Invitation canceled',
  })

  useEffect(() => {
    setLoading(updating)
  }, [updating])

  const handleCancel = () => updateInvite(invite.id)

  const handleResend = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`/api/resend-invitation?id=${invite.id}`)
      enqueueSnackbar(res.data, { variant: 'success' })
      setLoading(false)
    } catch (error) {
      enqueueSnackbar(error.response.data, { variant: 'error' })
      setLoading(false)
    }
  }

  return (
    <Button
      color="inherit"
      className={clsx(classes.action, classes[action])}
      onClick={action === CANCEL ? handleCancel : handleResend}
      disabled={action === CANCEL && invite.expiredAt ? true : false}
    >
      {loading ? <LoadingSpinner size={13} thickness={5} /> : action}
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
