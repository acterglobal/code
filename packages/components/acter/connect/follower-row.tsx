import React, { FC, useState, useEffect } from 'react'
import { Box, Grid } from '@material-ui/core'
import { getActerConnection } from '@acter/lib/acter/get-acter-connection'
import { useActer } from '@acter/lib/acter/use-acter'
import { ActerAvatar } from '@acter/components/acter/avatar'
import { AvatarGrid } from '@acter/components/acter/connect/avatar-grid'
import { MenuItem } from '@acter/components/acter/connect/menu-item'
import { ConnectProps } from '@acter/components/acter/connect'
import { Acter, ActerConnectionRole } from '@acter/schema'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'

interface FollowerRowProps extends Omit<ConnectProps, 'user'> {
  /**
   * The follower Acter
   */
  follower: Acter
}

export const FollowerRow: FC<FollowerRowProps> = ({
  follower,
  onJoin,
  onLeave,
  loading,
}) => {
  const noop = () => null
  const [onClick, setOnClick] = useState(noop)
  const { acter, loading: acterLoading } = useActer()

  const connection = getActerConnection(acter, follower)
  useEffect(() => {
    if (loading) {
      setOnClick(() => noop)
      return
    }

    setOnClick(() => (connection ? onLeave : onJoin))
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
