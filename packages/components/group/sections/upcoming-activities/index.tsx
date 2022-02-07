import React, { FC } from 'react'

import { useRouter } from 'next/router'

import { SectionContainer } from '@acter/components/group/sections/container'
import { UpcomingActivity } from '@acter/components/group/sections/upcoming-activities/upcoming-activity'
import { ZeroMessage } from '@acter/components/group/sections/zero-message'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'
import { getUpcomingActivities } from '@acter/lib/activity/get-activities-for-acter'
import { useActivities } from '@acter/lib/activity/use-activities'
import { ActerTypes } from '@acter/lib/constants'
import { Activity } from '@acter/schema'

export const UpcomingActivities: FC = () => {
  const router = useRouter()
  const { acter } = useActer()
  const { activities, fetching: activitiesFetching } = useActivities(acter?.id)

  if (!activities || !acter) return null

  const upcomingActivities = getUpcomingActivities(activities, 2)

  const handleClick = (activity: Activity) => {
    return router.push(acterAsUrl({ acter: activity?.Acter }))
  }

  return (
    <SectionContainer
      title="Upcoming Activities"
      buttonText="See All Activities"
      addItem={ActerTypes.ACTIVITY}
    >
      {activitiesFetching ? (
        <LoadingSpinner />
      ) : upcomingActivities?.length === 0 ? (
        <ZeroMessage
          addItem={ActerTypes.ACTIVITY}
          primaryText="There are currently no activities planned for this group."
          secondaryText="Do you want to plan an activity?"
          buttonText="Create Activity"
        />
      ) : (
        <>
          {upcomingActivities.map((activity) => (
            <UpcomingActivity activity={activity} handleClick={handleClick} />
          ))}
        </>
      )}
    </SectionContainer>
  )
}
