import React, { FC, useState, useEffect } from 'react'

import { Box, capitalize, Grid } from '@material-ui/core'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { AvatarGrid } from '@acter/components/acter/connect/avatar-grid'
import { MenuItem } from '@acter/components/acter/connect/menu-item'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { getActerConnection } from '@acter/lib/acter/get-acter-connection'
import { useActer } from '@acter/lib/acter/use-acter'
import { useCreateActerConnection } from '@acter/lib/acter/use-create-connection'
import { useDeleteActerConnection } from '@acter/lib/acter/use-delete-connection'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { Acter, ActerConnectionRole } from '@acter/schema'

interface FollowerRowProps {
  /**
   * The follower Acter
   */
  follower: Acter
  /**
   * Acter's id to follow
   */
  acterId?: string
}

export const FollowerRow: FC<FollowerRowProps> = ({ follower, acterId }) => {
  const { t } = useTranslation('common')
  const noop = () => null
  const [onClick, setOnClick] = useState(noop)
  const [fetching, setLoading] = useState(false)
  const { acter, fetching: acterLoading } = useActer({ acterId })

  const [{ fetching: creatingConnection }, createActerConnection] =
    useCreateActerConnection(acter)

  const [{ fetching: deletingConnection }, deleteActerConnection] =
    useDeleteActerConnection(acter)

  useEffect(() => {
    setLoading(acterLoading || creatingConnection || deletingConnection)
  }, [acterLoading, creatingConnection, deletingConnection])

  const connection = getActerConnection(acter, follower)
  useEffect(() => {
    if (fetching) {
      setOnClick(() => noop)
      return
    }

    setOnClick(() =>
      connection ? deleteActerConnection : createActerConnection
    )
  }, [fetching, connection])

  if (acterLoading) return <LoadingSpinner />
  if (!acter) return null
  const verb = connection ? 'leave' : 'join'

  return (
    <MenuItem
      key={`connect-${follower.id}`}
      onClick={() => {
        onClick(acter, follower)
        setOnClick(() => noop)
      }}
    >
      <Grid container alignItems="center" spacing={0}>
        <AvatarGrid>
          <ActerAvatar acter={follower} size={4} />
        </AvatarGrid>
        <Grid>
          {`${capitalize(t(verb))} ${t('as')} `}{' '}
          <strong>{follower.name}</strong>
          {connection && connection.role === ActerConnectionRole.PENDING && (
            <Box>{t('connectionPending')}</Box>
          )}
        </Grid>
      </Grid>
    </MenuItem>
  )
}
