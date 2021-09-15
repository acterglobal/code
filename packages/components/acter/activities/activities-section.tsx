import React, { FC, useState } from 'react'

import {
  Box,
  Checkbox,
  FormControlLabel,
  createStyles,
  withStyles,
} from '@material-ui/core'

import { ZeroMessage } from '@acter/components/acter/activities/zero-message'
import { AddActivityButton } from '@acter/components/activity/add-activity-button'
import { ActivitiesList } from '@acter/components/activity/list'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { getActivitiesForActerByStartAt } from '@acter/lib/activity/get-activities-for-acter'
import { useUser } from '@acter/lib/user/use-user'
import { User } from '@acter/schema'

export interface ActivitySectionProps {
  /**
   * Currently logged in user
   */
  user: User
}

export const ActivitiesSection: FC<ActivitySectionProps> = () => {
  const [showPastActivities, setShowPastActivities] = useState(true)
  const { user, loading: userLoading } = useUser()
  const { acter, loading: acterLoading } = useActer()

  if (acterLoading || userLoading) return <LoadingSpinner />
  if (!acter || !user) return null

  if (!acter) return <LoadingSpinner />
  const { allActivities, futureActivities } = getActivitiesForActerByStartAt(
    acter
  )

  const displayActivities = showPastActivities
    ? allActivities
    : futureActivities

  return (
    <>
      <TopSection>
        <AddActivityButton acter={acter} user={user} />

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
        <ZeroMessage acter={acter} activities={displayActivities} user={user} />

        <ActivitiesList activities={displayActivities} />
      </Box>
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
