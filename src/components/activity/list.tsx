import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Box, Button, makeStyles, createStyles, Theme } from '@material-ui/core'
import { ActivityTile } from 'src/components/activity/tile'
import { Acter, Activity, User } from '@generated/type-graphql'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: theme.spacing(3),
    },
    button: {
      borderRadius: theme.spacing(2),
    },
    activity: {
      display: 'inline-block',
      margin: theme.spacing(1),
      cursor: 'pointer',
    },
  })
)

interface ActivityListProps {
  acter: Acter
  activities: Activity[]
  user: User
}

export const ActivitiesList: FC<ActivityListProps> = ({
  acter,
  activities,
  user,
}) => {
  const router = useRouter()
  const classes = useStyles()

  const canCreate = acter.Followers.map(({ Follower: { id } }) => id).includes(
    user.Acter.id
  )

  return (
    <Box>
      {canCreate && (
        <Box className={classes.buttonContainer}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() =>
              router.push(`/activities/new?organiserActerId=${acter.id}`)
            }
          >
            + Add Activity
          </Button>
        </Box>
      )}
      <Box>
        {activities.map((activity) => (
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
