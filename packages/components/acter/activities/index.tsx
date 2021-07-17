import {
  HeaderSection,
  HeaderSectionProps,
} from '@acter/components/acter/landing-page/header-section'
import React, { FC } from 'react'

export type ActerActivitiesProps = HeaderSectionProps

export const ActerActivities: FC<ActerActivitiesProps> = ({
  acter,
  user,
  onJoin,
  onLeave,
  loading,
}) => {
  return (
    <>
      <HeaderSection
        acter={acter}
        user={user}
        onJoin={onJoin}
        onLeave={onLeave}
        loading={loading}
      />
    </>
  )
}
