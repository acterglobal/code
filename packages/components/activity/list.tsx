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
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole, Activity } from '@acter/schema'

export interface ActivityListProps {
  activities: Activity[]
}

export const ActivitiesList: FC<ActivityListProps> = ({ activities }) => {
  const { t } = useTranslation('common')
  const classes = useStyles()
  const { acter } = useActer()
  const { user } = useUser()

  const isMember = userHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter)

  return (
    <Box>
      {activities.length <= 0 ? (
        <Box className={classes.zeroMessage}>
          <Typography variant="body1">
            {isMember ? t('noActivities') : t('noActivitiesToShow')}
          </Typography>
        </Box>
      ) : (
        activities?.map((activity) => (
          <StyledActivityBox key={`activity-${activity.id}`}>
            <Link href={acterAsUrl({ acter: activity?.Acter })}>
              <ActivityTile activity={activity} />
            </Link>
          </StyledActivityBox>
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
