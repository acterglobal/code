import React, { FC } from 'react'

import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core'

import { ActivitiesSection } from './activities-section'

import { LandingPageLayout } from '@acter/components/acter/landing-page/layout'
import { useUser } from '@acter/lib/user/use-user'

export const ActerActivities: FC = () => {
  const classes = useStyles()
  const { user } = useUser()

  return (
    <LandingPageLayout>
      <Grid className={classes.main} item>
        <ActivitiesSection user={user} />
      </Grid>
    </LandingPageLayout>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      marginLeft: theme.spacing(2),
      width: '100%',
    },
  })
)
