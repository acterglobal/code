import React, { FC } from 'react'

import { Grid, makeStyles, createStyles, Theme, Box } from '@material-ui/core'

import { Connect } from '../acter/connect'
import { LoadingSpinner } from '../util/loading-spinner'
import { Organiser } from './organiser'

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
      <Grid className={classes.activity} item xs={12} sm={12}>
        <Box className={classes.organiserContainer}>
          <Organiser acter={acter?.Activity?.Organiser} />
          <Box className={classes.connectButtonContainer}>
            <Connect acterId={acter.id} />
          </Box>
        </Box>
      </Grid>
      <Grid className={classes.activity} item xs={12} sm={12}>
        <ActivityDetails acter={acter} />
      </Grid>
    </LandingPageLayout>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activity: {
      backgroundColor: theme.colors.grey.extraLight,
      '&.MuiGrid-item': {
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
      },
      order: 1,
    },
    info: {
      order: 2,
    },
    connectButtonContainer: {
      marginRight: theme.spacing(4),
    },
    organiserContainer: {
      borderRadius: 5,
      borderBottom: '30px',
      height: '50px',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
)
