import React, { FC, useState, useMemo } from 'react'
import { differenceInMilliseconds, parseISO } from 'date-fns/fp'
import { pipe } from 'fp-ts/function'
import {
  Box,
  Checkbox,
  FormControlLabel,
  createStyles,
  withStyles,
} from '@material-ui/core'
import { Acter, Activity, User } from '@acter/schema/types'
import { ActivitiesList } from '@acter/components/activity/list'
import { AddActivityButton } from '@acter/components/activity/add-activity-button'
import { ZeroMessage } from '@acter/components/acter/activities/zero-message'

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
  const allActivitiesOrganised =
    acter.ActivitiesOrganized?.filter((a) => a.Acter) || []
  const allActivitiesFollowed = acter.Following?.reduce(
    (memo, { Following }) =>
      Following.Activity ? [...memo, Following.Activity] : memo,
    [] as Activity[]
  )

  const allActivities = [
    ...allActivitiesOrganised,
    ...allActivitiesFollowed,
  ].sort((a, b) => differenceInMilliseconds(b.startAt, a.startAt))
  const now = new Date()
  const futureActivities = useMemo(
    () =>
      allActivities.filter(
        //@ts-ignore
        (a) => pipe(a.startAt, parseISO, differenceInMilliseconds(now)) >= 0
      ),
    [allActivities, now]
  )
  const [showPastActivities, setShowPastActivities] = useState(true)
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
