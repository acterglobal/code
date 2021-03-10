import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Box, makeStyles, createStyles, Theme } from '@material-ui/core'
import { ActivityTile } from 'src/components/activity/tile'
import { Acter, Activity } from '@generated/type-graphql'
import { DefaultMessage } from 'src/components/dashboard/default-message'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activity: {
      display: 'inline-block',
      margin: theme.spacing(1),
      cursor: 'pointer',
    },
  })
)

export interface ActivityListProps {
  acter: Acter
  activities: Activity[]
}

export const ActivitiesList: FC<ActivityListProps> = ({
  acter,
  activities,
}) => {
  const classes = useStyles()
  const router = useRouter()

  return (
    <Box>
      <Box>
        {acter.ActivitiesOrganized.length === 0 && (
          <DefaultMessage
            message="You have no activies."
            redirectTo={`/activities/new?organiserActerId=${acter.id}`}
          />
        )}

        {activities?.map((activity) => (
          <Box
            className={classes.activity}
            onClick={() => router.push(`/activities/${activity.Acter.slug}`)}
          >
            <ActivityTile activity={activity} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
