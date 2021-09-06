import React, { FC } from 'react'
import { ActivityTileProps } from '@acter/components/activity/tile'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { capitalize } from '@acter/lib/string/capitalize'

type ActivityTypeProps = ActivityTileProps

export const ActivityType: FC<ActivityTypeProps> = ({ activity }) => {
  const type: string = activity.ActivityType.name
  const classes = useStyles({ type })

  return (
    <Box className={classes.activityType}>
      <Typography
        aria-label="activity-type"
        variant="caption"
        className={classes.typeName}
      >
        {capitalize(activity.ActivityType.name)}
      </Typography>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activityType: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 28,
      textAlign: 'center',
      paddingTop: theme.spacing(0.5),
      backgroundColor: ({ type }: { type: string }) =>
        theme.colors.activityTypes[type],
    },
    typeName: {
      fontSize: '0.7rem',
    },
  })
)
