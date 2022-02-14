import React, { FC } from 'react'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { SectionContainer } from '@acter/components/group/sections/container'
import { UpcomingActivity } from '@acter/components/group/sections/upcoming-activities/upcoming-activity'
import { ZeroMessage } from '@acter/components/group/sections/zero-message'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'
import { getUpcomingActivities } from '@acter/lib/activity/get-activities-for-acter'
import { useActivities } from '@acter/lib/activity/use-activities'
import { ActerTypes } from '@acter/lib/constants'

export const UpcomingActivities: FC = () => {
  const { acter } = useActer()
  const { activities, fetching: activitiesFetching } = useActivities(acter?.id)

  if (!activities || !acter) return null

  const upcomingActivities = getUpcomingActivities(activities, 2)

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
            <Link
              key={`activity-${activity.id}`}
              href={acterAsUrl({
                acter: activity?.Acter,
                query: { localRoute: true },
              })}
            >
              <UpcomingActivity
                key={`activity-${activity.id}`}
                activity={activity}
              />
            </Link>
          ))}
        </>
      )}
    </SectionContainer>
  )
}
