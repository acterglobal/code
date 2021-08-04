import React, { FC } from 'react'
import { User } from '@acter/schema'
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import { ActivitiesList as ListOfActivities } from '@acter/components/activity/list'
import { useActivities } from '@acter/lib/activity/use-activities'

type ActivitiesListProps = {
  user: User
}
export const ActivitiesList: FC<ActivitiesListProps> = ({ user }) => {
  const classes = useStyles()

  const [activities] = useActivities(user.id)

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
