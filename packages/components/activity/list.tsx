import React, { FC } from 'react'

import Link from 'next/link'

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
          <Link href={`/activities/${activity.Acter?.slug}`} passHref>
            <a>
              <ActivityTile activity={activity} />
            </a>
          </Link>
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
      '& a': {
        textDecoration: 'none',
        color: theme.palette.text.primary,
      },
    },
  })
)(Box)
