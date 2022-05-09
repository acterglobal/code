import React, { FC } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { ActivityTypeIcon } from '@acter/components/icons/activity-type-icons'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { capitalize } from '@acter/lib/string/capitalize'
import { Activity } from '@acter/schema'

interface ActivityAvatarProps {
  activity: Activity
}

export const ActivityAvatar: FC<ActivityAvatarProps> = ({ activity }) => {
  const type: string = activity.ActivityType.name
  const classes = useStyles({ type })
  const { t } = useTranslation('common')

  return (
    <Box className={classes.activityAvatar}>
      <Box className={classes.avatar}>
        <ActivityTypeIcon activity={activity} />
      </Box>

      <Box className={classes.labelContainer}>
        <Typography className={classes.label}>
          {capitalize(t(`activityTypes.${activity.ActivityType?.name}`))}
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
      zIndex: 90,
      position: 'relative',
      left: 10,
      bottom: 50,
    },
    avatar: {
      borderRadius: '50%',
      backgroundColor: theme.colors.white,
      width: 47,
      height: 47,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 89,
    },
    labelContainer: {
      borderRadius: theme.spacing(3),
      backgroundColor: theme.colors.white,
      height: 21,
      position: 'relative',
      left: 20,
      bottom: 22,
      paddingLeft: 30,
      paddingRight: 8,
      display: 'flex',
      alignItems: 'center',
    },
    label: {
      fontSize: '0.8rem',
      color: ({ type }: { type: string }) => theme.colors.activityTypes[type],
    },
  })
)
