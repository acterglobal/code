import React, { FC, useState, useMemo } from 'react'
import Link from 'next/link'
import moment from 'moment'
import {
  Box,
  Checkbox,
  FormControlLabel,
  createStyles,
  withStyles,
  Theme,
} from '@material-ui/core'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActivityTile } from '@acter/components/activity/tile'
import { DefaultMessage } from '@acter/components/dashboard/default-message'
import { Acter, ActerConnectionRole, Activity, User } from '@acter/schema/types'
export interface ActivityListProps {
  /**
   * Organizing Acter for Activities
   */
  acter: Acter
  /**
   * Currently logged in user
   */
  user: User
}

export const ActivitiesList: FC<ActivityListProps> = ({ acter, user }) => {
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
    <Box>
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
      <Box>
        <ZeroMessage acter={acter} activities={displayActivities} user={user} />

        {displayActivities?.map((activity) => (
          <StyledActivityBox key={activity.id}>
            <Link
              href="/activities/[slug]"
              as={`/activities/${activity.Acter?.slug}`}
              passHref
            >
              <a>
                <ActivityTile activity={activity} />
              </a>
            </Link>
          </StyledActivityBox>
        ))}
      </Box>
    </Box>
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

const StyledActivityBox = withStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
      display: 'inline-block',
      '& a': {
        textDecoration: 'none',
        color: theme.palette.text.primary,
      },
    },
  })
)(Box)
