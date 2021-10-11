import React, { FC, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import {
  Box,
  Checkbox,
  FormControlLabel,
  createStyles,
  withStyles,
} from '@material-ui/core'

import { ZeroMessage } from '@acter/components/acter/activities/zero-message'
import { AddActivitySection } from '@acter/components/activity/add-activity-section'
import { ActivitiesList } from '@acter/components/activity/list'
import { ActivityLanding } from '@acter/components/activity/tile/activity-landing'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { getActivitiesForActerByStartAt } from '@acter/lib/activity/get-activities-for-acter'
import { User } from '@acter/schema'

export interface ActivitySectionProps {
  /**
   * Currently logged in user
   */
  user: User
}

export const ActivitiesSection: FC<ActivitySectionProps> = () => {
  const [showPastActivities, setShowPastActivities] = useState(true)
  const { acter, loading: acterLoading } = useActer()

  const { query } = useRouter()
  const [showActivity, setShowActivity] = useState<boolean>(false)

  useEffect(() => {
    if (query?.acterId) setShowActivity(true)
  }, [query?.acterId])

  if (acterLoading) return <LoadingSpinner />
  if (!acter) return null

  const { allActivities, futureActivities } = getActivitiesForActerByStartAt(
    acter
  )

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

      <Box>
        <ZeroMessage activities={displayActivities} />

        <ActivitiesList activities={displayActivities} />
      </Box>

      {showActivity && <ActivityLanding acterId={query?.acterId as string} />}
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
