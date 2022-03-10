import React, { FC } from 'react'

import { Box, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { ActivitiesSection } from '@acter/components/acter/activities/activities-section'
import { LandingPageLayout } from '@acter/components/group/layout'

export const GroupActivities: FC = () => {
  const classes = useStyles()
  return (
    <LandingPageLayout>
      <Box className={classes.activities}>
        <ActivitiesSection />
      </Box>
    </LandingPageLayout>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activities: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
  })
)
