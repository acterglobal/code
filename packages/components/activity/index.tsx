import React, { FC } from 'react'

import { Grid, makeStyles, createStyles, Theme } from '@material-ui/core'

import { LoadingSpinner } from '../util/loading-spinner'

import { LandingPageLayout } from '@acter/components/acter/landing-page/layout'
import { ActivityDetails } from '@acter/components/activity/activity-details'
import { Acter } from '@acter/schema'

export interface ActivityProps {
  acter: Acter
  acterLoading?: boolean
}

export const Activity: FC<ActivityProps> = ({ acter, acterLoading }) => {
  const classes = useStyles()

  if (acterLoading || !acter) return <LoadingSpinner />

  return (
    <LandingPageLayout>
      <Grid className={classes.activity} item xs={12} sm={12} md={8} xl={12}>
        <ActivityDetails acter={acter} />
      </Grid>
    </LandingPageLayout>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activity: {
      '&.MuiGrid-item': {
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
      },
      order: 1,
    },
    info: {
      order: 2,
    },
  })
)
