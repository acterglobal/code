import React, { FC, useEffect, useState } from 'react'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import {
  Box,
  Checkbox,
  FormControlLabel,
  createStyles,
  withStyles,
} from '@material-ui/core'

import { AddActivitySection } from '@acter/components/activity/add-activity-section'
import { ActivitiesList } from '@acter/components/activity/list'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import {
  getActivitiesAfterDate,
  sortActivitiesByStartAt,
} from '@acter/lib/activity/get-activities-for-acter'
import { useActivities } from '@acter/lib/activity/use-activities'

const ActivityLanding = dynamic(() =>
  import('@acter/components/activity/tile/activity-landing').then(
    (mod) => mod.ActivityLanding
  )
)

export const ActivitiesSection: FC = () => {
  const [showPastActivities, setShowPastActivities] = useState(true)
  const { acter, fetching: acterFetching } = useActer()
  const { activities, fetching: activitiesFetching } = useActivities(acter?.id)

  const { query } = useRouter()
  const [showActivity, setShowActivity] = useState<boolean>(false)

  useEffect(() => {
    if (query?.activity) setShowActivity(true)
  }, [query?.activity])

  if (acterFetching || activitiesFetching) return <LoadingSpinner />
  if (!acter || !activities) return null

  const allActivities = sortActivitiesByStartAt(activities)
  const futureActivities = getActivitiesAfterDate(allActivities, new Date())

  const displayActivities = showPastActivities
    ? allActivities
    : futureActivities

  return (
    <>
      <TopSection>
        <AddActivitySection />

        <FormControlsContainer>
          <FormControlLabel
            control={
              <Checkbox
                checked={showPastActivities}
                onChange={(evt) => setShowPastActivities(evt.target.checked)}
                name="showPastActivities"
              />
            }
            label="Show past activities?"
          />
        </FormControlsContainer>
      </TopSection>

      <ActivitiesList activities={displayActivities} />

      {showActivity && (
        <ActivityLanding
          activitySlug={`${query.slug}-${query.activity}`}
          openDrawer={showActivity}
          handleCloseDrawer={() => setShowActivity(false)}
        />
      )}
    </>
  )
}

const FormControlsContainer = withStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  })
)(Box)

const TopSection = withStyles(() =>
  createStyles({
    root: {
      paddingLeft: 8,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
)(Box)
