import React, { FC } from 'react'
import { ActerAvatar } from 'src/components/acter/avatar'
import { Acter } from '@schema'

export interface AvatarGroupProps {
  acters: Acter[]
  /**
   * Total number of acters in database
   */
  totalCount?: number
}
export const AvatarGroup: FC<AvatarGroupProps> = ({ acters, totalCount }) => {
  return (
    <div style={{ display: 'flex' }}>
      {acters.map((acter) => (
        <>
          <ActerAvatar
            key={`info-follower-acter-${acter.id}`}
            acter={acter}
            size={4}
          />

          {/* if (acters.length < totalCount) // show all acters + meatballs
          if (acters.length === totalCount) // show all acters, no meatballs
          if (acters.length > totalCount) // show totalCount acters + meatballs */}

          <ActerAvatar
            key={`info-follower-acter-${acter.id}`}
            acter={acter}
            groupAvatar={
              acters.length < totalCount || acters.length > totalCount
            }
            size={4}
          />
        </>
      ))}
    </div>
  )
}
