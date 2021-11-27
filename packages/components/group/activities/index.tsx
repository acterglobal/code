import React, { FC } from 'react'

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

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
