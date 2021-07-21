import React, { FC, useState, useMemo } from 'react'
import moment from 'moment'
import {
  Box,
  Checkbox,
  FormControlLabel,
  createStyles,
  withStyles,
} from '@material-ui/core'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { DefaultMessage } from '@acter/components/dashboard/default-message'
import { Acter, ActerConnectionRole, Activity, User } from '@acter/schema/types'
import { ActivitiesList } from '@acter/components/activity/list'
import { AddActivityButton } from '@acter/components/activity/add-activity-button'

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
  ].sort((a, b) => moment(a.startAt).valueOf() - moment(b.startAt).valueOf())
  const now = moment()
  const futureActivities = useMemo(
    () => allActivities.filter((a) => now.isSameOrBefore(a.startAt)),
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

interface ZeroMessageProps {
  acter: Acter
  activities: Activity[]
  user: User
}

const ZeroMessage: FC<ZeroMessageProps> = ({ acter, activities, user }) => {
  if (activities.length <= 0) {
    if (userHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter)) {
      return (
        <DefaultMessage
          message="You have no activies."
          redirectTo={`/activities/new?organiserActerId=${acter.id}`}
        />
      )
    }
    return (
      <DefaultMessage message="There are no activities to show at this time" />
    )
  }
  return null
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
