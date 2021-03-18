import React, { FC } from 'react'
import { Box, createStyles, withStyles, Theme } from '@material-ui/core'
import { Avatar, ActerAvatar } from 'src/components/acter/avatar'
import { Acter } from '@schema'

export interface AvatarGroupProps {
  acters: Acter[]
  /**
   * Total number of acters in database
   */
  totalCount?: number
}
export const AvatarGroup: FC<AvatarGroupProps> = ({ acters, totalCount }) => {
  const size = 4.5
  return (
    <AvatarGroupContainer>
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
    </AvatarGroupContainer>
  )
}

const AvatarGroupContainer = withStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      // '& *:not(:first-child)': {
      //   marginLeft: '-.25rem',
      // },
    },
  })
)(Box)
