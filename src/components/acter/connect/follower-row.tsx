import React, { FC, useState, useEffect } from 'react'
import { Box, Grid } from '@material-ui/core'
import { getActerConnection } from 'src/lib/acter/get-acter-connection'
import { ActerAvatar } from 'src/components/acter/avatar'
import { AvatarGrid } from 'src/components/acter/connect/avatar-grid'
import { MenuItem } from 'src/components/acter/connect/menu-item'
import { ConnectProps } from 'src/components/acter/connect'
import { Acter, ActerConnectionStatus } from '@schema'

interface FollowerRowProps extends Omit<ConnectProps, 'user'> {
  follower: Acter
}

export const FollowerRow: FC<FollowerRowProps> = ({
  acter,
  follower,
  onJoin,
  onLeave,
  loading,
}) => {
  const noop = () => null
  const [onClick, setOnClick] = useState(noop)

  const connection = getActerConnection(acter, follower)

  useEffect(() => {
    if (loading) {
      setOnClick(() => noop)
      return
    }

    setOnClick(() => (connection ? onLeave : onJoin))
  }, [loading, connection])
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
          {connection &&
            connection.status === ActerConnectionStatus.PENDING && (
              <Box>Connection pending</Box>
            )}
        </Grid>
      </Grid>
    </MenuItem>
  )
}
