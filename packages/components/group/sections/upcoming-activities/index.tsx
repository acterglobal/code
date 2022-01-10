import React, { FC, useState } from 'react'

import { useRouter } from 'next/router'

import { ActivityLanding } from '@acter/components/activity/tile/activity-landing'
import { SectionContainer } from '@acter/components/group/sections/container'
import { UpcomingActivity } from '@acter/components/group/sections/upcoming-activities/upcoming-activity'
import { ZeroMessage } from '@acter/components/group/sections/zero-message'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { getUpcomingActivities } from '@acter/lib/activity/get-activities-for-acter'
import { useActivities } from '@acter/lib/activity/use-activities'
import { ActerTypes } from '@acter/lib/constants'
import { Activity } from '@acter/schema'

export const UpcomingActivities: FC = () => {
  const router = useRouter()
  const [activitySlug, setActivitySlug] = useState(
    router.query?.activity as string
  )
  const [showActivity, setShowActivity] = useState(
    Boolean(router.query?.activity)
  )

  const { acter } = useActer()
  const { activities, fetching: activitiesFetching } = useActivities(acter?.id)

  if (!activities || !acter) return null

  const upcomingActivities = getUpcomingActivities(activities, 2)

  const handleClick = (activity: Activity) => {
    const query = { ...router.query, activity: activity.Acter.slug }
    router.push({ query }, undefined, { shallow: true })
    setActivitySlug(activity.Acter.slug)
    setShowActivity(true)
  }

  const handleClose = () => {
    delete router.query.activity
    router.push({ query: router.query }, undefined, { shallow: true })
    setShowActivity(false)
    setActivitySlug(null)
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

      {showActivity && (
        <ActivityLanding
          activitySlug={activitySlug}
          openDrawer={showActivity}
          handleCloseDrawer={handleClose}
        />
      )}
    </SectionContainer>
  )
}
