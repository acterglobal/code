import React, { FC } from 'react'

import { Grid, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { ActivitiesSection } from './activities-section'

import { LandingPageLayout } from '@acter/components/acter/landing-page/layout'

export const ActerActivities: FC = () => {
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
