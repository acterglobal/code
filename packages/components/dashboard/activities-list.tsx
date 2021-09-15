import React, { FC } from 'react'

import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'

import { ActivitiesList as ListOfActivities } from '@acter/components/activity/list'
import { Activity } from '@acter/schema'

type ActivitiesListProps = {
  activities: Activity[]
}
export const ActivitiesList: FC<ActivitiesListProps> = ({ activities }) => {
  const classes = useStyles()

  return activities.length === 0 ? (
    <Typography variant="body2" className={classes.zeroMessage}>
      You are currently not participating in any activities. As you join new
      activities, they will show here.
    </Typography>
  ) : (
    <ListOfActivities activities={activities} />
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    zeroMessage: {
      fontStyle: 'italic',
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.secondary.main,
    },
  })
)
