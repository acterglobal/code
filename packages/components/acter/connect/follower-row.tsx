import React, { FC, useState, useEffect } from 'react'

import { Box, Grid } from '@material-ui/core'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { AvatarGrid } from '@acter/components/acter/connect/avatar-grid'
import { MenuItem } from '@acter/components/acter/connect/menu-item'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { getActerConnection } from '@acter/lib/acter/get-acter-connection'
import { useActer } from '@acter/lib/acter/use-acter'
import { useCreateActerConnection } from '@acter/lib/acter/use-create-connection'
import { useDeleteActerConnection } from '@acter/lib/acter/use-delete-connection'
import { Acter, ActerConnectionRole } from '@acter/schema'

interface FollowerRowProps {
  /**
   * The follower Acter
   */
  follower: Acter
}

export const FollowerRow: FC<FollowerRowProps> = ({ follower }) => {
  const noop = () => null
  const [onClick, setOnClick] = useState(noop)
  const [loading, setLoading] = useState(false)
  const { acter, loading: acterLoading } = useActer()

  const [
    createActerConnection,
    { loading: creatingConnection },
  ] = useCreateActerConnection(acter)

  const [
    deleteActerConnection,
    { loading: deletingConnection },
  ] = useDeleteActerConnection(acter)

  useEffect(() => {
    setLoading(acterLoading || creatingConnection || deletingConnection)
  }, [acterLoading, creatingConnection, deletingConnection])

  const connection = getActerConnection(acter, follower)
  useEffect(() => {
    if (loading) {
      setOnClick(() => noop)
      return
    }

    setOnClick(() =>
      connection ? deleteActerConnection : createActerConnection
    )
  }, [loading, connection])

  if (acterLoading) return <LoadingSpinner />
  if (!acter) return null
  const verb = connection ? 'Leave' : 'Join'

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
          {verb} as <strong>{follower.name}</strong>
          {connection && connection.role === ActerConnectionRole.PENDING && (
            <Box>Connection pending</Box>
          )}
        </Grid>
      </Grid>
    </MenuItem>
  )
}
