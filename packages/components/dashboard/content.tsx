import React, { FC } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Divider,
} from '@material-ui/core'

import { ActivitiesList } from '@acter/components/dashboard/activities-list'
import { GroupsList } from '@acter/components/dashboard/groups-list'
import { flattenFollowing } from '@acter/lib/acter/flatten-following'
import { useActivities } from '@acter/lib/activity/use-activities'
import { ActerTypes } from '@acter/lib/constants'
import { useUser } from '@acter/lib/user/use-user'

const { GROUP } = ActerTypes

export const DashboardContent: FC = () => {
  const classes = useStyles()
  const { user, loading: userLoading } = useUser()

  const { activities, loading: activitiesLoading } = useActivities(
    user?.Acter.id
  )

  if (userLoading || activitiesLoading) return <>Loading...</>
  if (!user) return null

  const acters = flattenFollowing(user?.Acter)
  const groups = acters.filter((acter) => acter.ActerType.name === GROUP)

  return (
    <Box className={classes.container}>
      <Box className={classes.groups}>
        <Heading title="My Groups" />
        {groups.length === 0 ? <ZeroMessage /> : <GroupsList groups={groups} />}
      </Box>

      <Box className={classes.activities}>
        <Heading title="My Activities" />
        {activities ? (
          <>
            {activities.length === 0 ? (
              <ZeroMessage />
            ) : (
              <ActivitiesList activities={activities} />
            )}
          </>
        ) : null}
      </Box>
    </Box>
  )
}

type HeadingProps = { title: string }
const Heading: FC<HeadingProps> = ({ title }) => {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h6" className={classes.heading}>
        {title}
      </Typography>
      <Divider className={classes.divider} />
    </>
  )
}

const ZeroMessage = () => {
  const classes = useStyles()
  return (
    <Typography variant="body2" className={classes.zeroMessage}>
      You are currently not part of any groups. As you join new groups they will
      show here.
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
  })
)
