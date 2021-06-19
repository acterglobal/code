import React, { FC } from 'react'
import { ActivityTileProps } from 'src/components/activity/tile'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { activityTypeBackgroundColors } from 'src/themes/colors'

type ActivityTypeProps = ActivityTileProps

export const ActivityType: FC<ActivityTypeProps> = ({ activity }) => {
  const classes = useStyles()

  return (
    <Box
      className={classes.activityType}
      style={{
        backgroundColor:
          activityTypeBackgroundColors[activity.ActivityType.name],
      }}
    >
      <Typography
        aria-label="activity-type"
        variant="caption"
        className={classes.typeName}
      >
        {activity.ActivityType.name}
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
      textTransform: 'capitalize',
      paddingTop: theme.spacing(0.5),
    },
    typeName: {
      fontSize: '0.7rem',
    },
  })
)
