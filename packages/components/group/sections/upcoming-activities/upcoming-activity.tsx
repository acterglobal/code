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
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { Activity } from '@acter/schema'

interface UpcomingActivityProps {
  activity: Activity
}
export const UpcomingActivity: FC<UpcomingActivityProps> = ({ activity }) => {
  const classes = useStyles()
  const { t } = useTranslation('group-landing')

  return (
    <Box className={classes.activity}>
      <Box className={classes.details}>
        <DateTimeInfo activity={activity} />

        <Typography className={classes.name} variant="h6">
          {activity.Acter?.name}
        </Typography>

        <Typography className={classes.location} variant="body2">
          {activity.isOnline
            ? t('common.form.online')
            : activity.Acter?.location}
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          className={classes.button}
          href={acterAsUrl({
            acter: activity?.Acter,
          })}
        >
          {t('upcomingActivities.view')}
        </Button>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activity: {
      width: '100%',
      display: 'flex',
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(1),
    },
    details: {
      width: '75%',
    },
    name: {
      fontSize: theme.spacing(1.5),
      fontWeight: theme.typography.fontWeightBold,
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
      marginLeft: theme.spacing(0.5),
      textTransform: 'capitalize',
      fontSize: '0.75rem',
      borderRadius: 16,
      height: 30,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.secondary.dark,
    },
  })
)
