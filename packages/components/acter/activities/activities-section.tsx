import React, { FC, useState, useMemo } from 'react'
import {
  Box,
  Checkbox,
  FormControlLabel,
  createStyles,
  withStyles,
} from '@material-ui/core'
import { getActivitiesForActerByStartAt } from '@acter/lib/activity/get-activities-for-acter'
import { ActivitiesList } from '@acter/components/activity/list'
import { AddActivityButton } from '@acter/components/activity/add-activity-button'
import { ZeroMessage } from '@acter/components/acter/activities/zero-message'
import { Acter, User } from '@acter/schema'

export interface ActivitySectionProps {
  /**
   * Organizing Acter for Activities
   */
  acter: Acter
  /**
   * Currently logged in user
   */
  user: User
}

export const ActivitiesSection: FC<ActivitySectionProps> = ({
  acter,
  user,
}) => {
  const [showPastActivities, setShowPastActivities] = useState(true)
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
