import React, { FC } from 'react'
import { ActerAvatar } from 'src/components/acter/avatar'
import { Acter } from '@generated/type-graphql'

export interface AvatarGroupProps {
  acters: Acter[]
  maxShow: number
  totalCount?: number // from db
}
export const AvatarGroup: FC<AvatarGroupProps> = ({ acters, maxShow }) => {
  return (
    <div style={{ display: 'flex' }}>
      {acters.map((acter, i) => (
        <>
          {/* <ActerAvatar
            key={`info-follower-acter-${acter.id}`}
            acter={acter}
            size={4}
          /> */}
          <ActerAvatar
            key={`info-follower-acter-${acter.id}`}
            acter={acter}
            groupAvatar={i === maxShow}
            size={4}
          />
        </>
      ))}
    </div>
  )
}
