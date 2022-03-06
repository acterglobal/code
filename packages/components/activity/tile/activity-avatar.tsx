import React, { FC } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import {
  EventActivityIcon,
  IdeaActivityIcon,
  MeetingActivityIcon,
  ProjectActivityIcon,
} from '@acter/components/icons/activity-type-icons'
import { ActivityTypes } from '@acter/lib/constants'
import { capitalize } from '@acter/lib/string/capitalize'
import { Activity } from '@acter/schema'

const { EVENT, PROJECT, MEETING, IDEA } = ActivityTypes

interface ActivityAvatarProps {
  activity: Activity
}

export const ActivityAvatar: FC<ActivityAvatarProps> = ({ activity }) => {
  const type: string = activity.ActivityType.name
  const classes = useStyles({ type })

  const ActivityTypeIcon = ({ activity }) => {
    switch (activity.ActivityType.name) {
      case EVENT:
        return <EventActivityIcon />
      case PROJECT:
        return <ProjectActivityIcon />
      case MEETING:
        return <MeetingActivityIcon />
      case IDEA:
        return <IdeaActivityIcon />
    }
  }

  return (
    <Box className={classes.activityAvatar}>
      <Box className={classes.avatar}>
        <ActivityTypeIcon activity={activity} />
      </Box>
      <Box className={classes.labelContainer}>
        <Typography className={classes.label}>
          {capitalize(activity.ActivityType?.name)}
        </Typography>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activityAvatar: {
      width: 'fit-content',
      height: 40,
      zIndex: 99,
      position: 'relative',
      left: 10,
      bottom: 44,
    },
    avatar: {
      borderRadius: '50%',
      backgroundColor: theme.colors.white,
      width: 40,
      height: 40,
      display: 'flex',
      paddingLeft: 7,
      alignItems: 'center',
      position: 'relative',
      zIndex: 98,
    },
    labelContainer: {
      borderRadius: theme.spacing(3),
      backgroundColor: theme.colors.white,
      height: 18,
      position: 'relative',
      left: 10,
      bottom: 18,
      paddingLeft: 30,
      paddingRight: 8,
      display: 'flex',
      alignItems: 'center',
    },
    label: {
      fontSize: '0.5rem',
      color: ({ type }: { type: string }) => theme.colors.activityTypes[type],
    },
  })
)
