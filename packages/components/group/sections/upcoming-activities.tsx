import React, { FC, useState } from 'react'

import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { ActivityLanding } from '@acter/components/activity/tile/activity-landing'
import { DateTimeInfo } from '@acter/components/activity/tile/date-time-info'
import { SectionContainer } from '@acter/components/group/sections/container'
import { ZeroMessage } from '@acter/components/group/sections/zero-message'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import {
  getActivitiesAfterDate,
  sortActivitiesByStartAt,
} from '@acter/lib/activity/get-activities-for-acter'
import { useActivities } from '@acter/lib/activity/use-activities'
import { ActerTypes } from '@acter/lib/constants'
import { Activity } from '@acter/schema'

export const UpcomingActivities: FC = () => {
  const classes = useStyles()
  const [showActivity, setShowActivity] = useState(false)
  const [activitySlug, setActivitySlug] = useState(null)

  const { acter } = useActer()
  const { activities, fetching: activitiesFetching } = useActivities(acter?.id)
  if (!activities || !acter) return null

  const allActivities = sortActivitiesByStartAt(activities)
  const upcomingActivities = getActivitiesAfterDate(allActivities, new Date())

  const handleClick = (activity: Activity) => {
    setActivitySlug(activity.Acter.slug)
    setShowActivity(true)
  }

  const handleClose = () => {
    setShowActivity(false)
    setActivitySlug(null)
  }

  return (
    <SectionContainer
      title="Upcoming Activities"
      buttonText="See All Activities"
      addItem={ActerTypes.ACTIVITY}
    >
      <Box className={classes.list}>
        {activitiesFetching ? (
          <LoadingSpinner />
        ) : upcomingActivities?.length === 0 ? (
          <ZeroMessage
            addItem={ActerTypes.ACTIVITY}
            primaryText="There are currently no activities planned for this group."
            secondaryText="Do you want to plan an activity?"
            buttonText="Create Activity"
          />
        ) : (
          <>
            {upcomingActivities.map((activity) => (
              <Box className={classes.activity}>
                <Box>
                  <DateTimeInfo activity={activity} />

                  <Typography className={classes.name} variant="h6">
                    {activity.Acter?.name}
                  </Typography>

                  <Typography
                    className={classes.location}
                    noWrap
                    variant="body2"
                  >
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
            ))}
          </>
        )}
      </Box>

      {showActivity && (
        <ActivityLanding
          activitySlug={activitySlug}
          openDrawer={showActivity}
          handleCloseDrawer={handleClose}
        />
      )}
    </SectionContainer>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      height: theme.spacing(14),
    },
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
