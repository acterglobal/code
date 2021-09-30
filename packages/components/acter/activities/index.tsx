import React, { FC } from 'react'
import { di } from 'react-magnetic-di/macro'

import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core'

import { ActivitiesSection } from './activities-section'

import { LandingPageLayout } from '@acter/components/acter/landing-page/layout'

export const ActerActivities: FC = () => {
  di(useUser)
  const classes = useStyles()

  return (
    <LandingPageLayout>
      <Grid className={classes.main} item>
        <ActivitiesSection />
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
