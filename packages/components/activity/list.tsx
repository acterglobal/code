import React, { FC } from 'react'

import {
  Box,
  createStyles,
  withStyles,
  Theme,
  makeStyles,
  Typography,
} from '@material-ui/core'

import { ActivityTile } from '@acter/components/activity/tile'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole, Activity, Acter } from '@acter/schema'

export interface ActivityListProps {
  activities: Activity[]
  acter: Acter
}

export const ActivitiesList: FC<ActivityListProps> = ({ activities }) => {
  const classes = useStyles()
  const { acter } = useActer()
  const { user } = useUser()

  const isMember = userHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter)

  return (
    <Box>
      {activities.length <= 0 ? (
        <Box className={classes.zeroMessage}>
          <Typography variant="body1">
            {isMember
              ? 'You have no activities.'
              : 'There are no activities to show at this time'}
          </Typography>
        </Box>
      ) : (
        acter &&
        activities?.map((activity) => (
          <Link
            href={acterAsUrl({
              acter: activity.Organiser,
              activity,
            })}
            passHref
          >
            <StyledActivityBox key={activity.id}>
              <ActivityTile activity={activity} />
            </StyledActivityBox>
          </Link>
        ))
      )}
    </Box>
  )
}

const StyledActivityBox = withStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
      display: 'inline-block',
    },
  })
)(Box)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    zeroMessage: {
      marginTop: theme.spacing(8),
      textAlign: 'center',
    },
  })
)
