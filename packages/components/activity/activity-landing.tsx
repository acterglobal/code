import React, { FC } from 'react'

import { Activity } from '@acter/components/activity'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { Acter } from '@acter/schema'

interface ActivityLandingProps {
  acter: Acter
  acterLoading: boolean
}

export const ActivityLanding: FC<ActivityLandingProps> = ({
  acter,
  acterLoading,
}) => {
  if (acterLoading) return <LoadingSpinner />

  return <Activity acter={acter} acterLoading={acterLoading} />
}
