import { FC } from 'react'

import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { DateTimeInfo } from '@acter/components/activity/tile/date-time-info'
import { Activity } from '@acter/schema'

interface UpcomingActivityProps {
  activity: Activity
  handleClick: (activity: Activity) => void
}
export const UpcomingActivity: FC<UpcomingActivityProps> = ({
  activity,
  handleClick,
}) => {
  const classes = useStyles()

  return (
    <Box className={classes.activity}>
      <Box>
        <DateTimeInfo activity={activity} />

        <Typography className={classes.name} variant="h6">
          {activity.Acter?.name}
        </Typography>

        <Typography className={classes.location} noWrap variant="body2">
          {activity.isOnline ? 'Online' : activity.Acter?.location}
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => handleClick(activity)}
        >
          View
        </Button>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activity: {
      display: 'flex',
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(1),
    },

    name: {
      fontSize: theme.spacing(1.5),
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1.3,
      display: '-webkit-box',
      boxOrient: 'vertical',
      lineClamp: 2,
      wordBreak: 'break-all',
      overflow: 'hidden',
      marginBottom: theme.spacing(0.5),
      marginLeft: theme.spacing(0.5),
      color: theme.palette.secondary.dark,
    },
    location: {
      fontSize: theme.spacing(1.3),
      color: theme.colors.grey.main,
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: theme.spacing(0.5),
    },
    button: {
      textTransform: 'capitalize',
      fontSize: '0.75rem',
      borderRadius: 16,
      height: 30,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.secondary.dark,
    },
  })
)
