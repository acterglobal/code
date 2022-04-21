import React, { FC } from 'react'

import { Box, createStyles, makeStyles } from '@material-ui/core'

import { Avatar, ActerAvatar } from '@acter/components/acter/avatar'
import { Acter } from '@acter/schema'

export interface AvatarGroupProps {
  acters: Acter[]
  /**
   * Total number of acters in database
   */
  totalCount?: number
}
export const AvatarGroup: FC<AvatarGroupProps> = ({ acters, totalCount }) => {
  const size = 4.5
  const classes = useStyles()
  return (
    <Box className={classes.avatarGroup}>
      <>
        {acters.map((acter) => (
          <ActerAvatar
            key={`info-follower-acter-${acter.id}`}
            acter={acter}
            size={size}
          />
        ))}
        {totalCount > acters.length && (
          <Avatar size={size}>+ {totalCount - acters.length}</Avatar>
        )}
      </>
    </Box>
  )
}

const useStyles = makeStyles(
  createStyles({
    avatarGroup: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  })
)
