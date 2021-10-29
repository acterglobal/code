import React, { FC } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Divider,
} from '@material-ui/core'

import { ActivitiesList } from '@acter/components/activity/list'
import { GroupsList } from '@acter/components/dashboard/groups-list'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { flattenFollowing } from '@acter/lib/acter/flatten-following'
import { useActivities } from '@acter/lib/activity/use-activities'
import { ActerTypes } from '@acter/lib/constants'
import { useUser } from '@acter/lib/user/use-user'

const { ACTIVITY, GROUP } = ActerTypes

export const DashboardContent: FC = () => {
  const classes = useStyles()
  const { user, fetching: userLoading } = useUser()

  const { activities, fetching: activitiesLoading } = useActivities(
    user?.Acter.id
  )

  if (userLoading || activitiesLoading) return <LoadingSpinner />
  if (!user) return null

  const acters = flattenFollowing(user?.Acter)
  const groups = acters.filter((acter) => acter.ActerType.name === GROUP)

  return (
    <Box className={classes.container}>
      <Box className={classes.groups}>
        <Heading title="My Groups" />
        <Box className={classes.content}>
          {groups.length === 0 ? (
            <ZeroMessage messageFor={GROUP} />
          ) : (
            <GroupsList groups={groups} />
          )}
        </Box>
      </Box>

      <Box className={classes.activities}>
        <Heading title="My Activities" />
        <Box className={classes.content}>
          {activities ? (
            <>
              {activities.length === 0 ? (
                <ZeroMessage messageFor={ACTIVITY} />
              ) : (
                <ActivitiesList activities={activities} />
              )}
            </>
          ) : null}
        </Box>
      </Box>
    </Box>
  )
}

type HeadingProps = { title: string }
const Heading: FC<HeadingProps> = ({ title }) => {
  const classes = useStyles()
  return (
    <Box className={classes.headingSection}>
      <Typography variant="h6" className={classes.heading}>
        {title}
      </Typography>
      <Divider className={classes.divider} />
    </Box>
  )
}

const ZeroMessage = ({ messageFor }) => {
  const classes = useStyles()
  return (
    <Typography variant="body2" className={classes.zeroMessage}>
      {messageFor === GROUP &&
        `You are currently not part of any groups. As you join new groups they will
      show here.`}
      {messageFor === ACTIVITY &&
        `You are currently not participating in any activities. As you join new
        activities, they will show here.`}
    </Typography>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      marginTop: theme.spacing(4),
    },
    groups: {
      width: 260,
      marginLeft: theme.spacing(4),
    },
    activities: {
      marginLeft: theme.spacing(5),
      paddingRight: theme.spacing(1),
    },
    headingSection: {
      marginTop: 20,
      width: '100%',
      backgroundColor: theme.colors.white,
      position: 'fixed',
      zIndex: 99,
    },
    heading: {
      fontSize: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.secondary.main,
      marginBottom: theme.spacing(1),
    },
    divider: {
      backgroundColor: theme.palette.secondary.main,
      marginBottom: theme.spacing(1),
    },
    zeroMessage: {
      width: 250,
      fontStyle: 'italic',
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.secondary.main,
    },
    content: {
      marginTop: 70,
    },
  })
)
