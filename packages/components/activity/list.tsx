import React, { FC } from 'react'

import { Box, createStyles, withStyles, Theme } from '@material-ui/core'

import { ActivityTile } from '@acter/components/activity/tile'
import { Activity } from '@acter/schema'

export interface ActivityListProps {
  activities: Activity[]
}

export const ActivitiesList: FC<ActivityListProps> = ({ activities }) => {
  return (
    <>
      {activities?.map((activity) => (
        <StyledActivityBox key={activity.id}>
          <ActivityTile activity={activity} />
        </StyledActivityBox>
      ))}
    </>
  )
}

const StyledActivityBox = withStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
      display: 'inline-block',
    },
  })
)(Box)
