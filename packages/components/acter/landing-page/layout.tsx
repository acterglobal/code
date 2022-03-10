import React, { FC } from 'react'

import { Grid, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { HeaderSection as ActerHeaderSection } from '@acter/components/acter/landing-page/header-section'
import { HeaderSection as ActivityHeaderSection } from '@acter/components/activity/landing-page/header-section'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { ActerTypes } from '@acter/lib/constants'

const { ACTIVITY } = ActerTypes

export const LandingPageLayout: FC = ({ children }) => {
  const classes = useStyles()

  const { acter, fetching: acterLoading } = useActer()

  if (acterLoading) return <LoadingSpinner />
  if (!acter) return null

  const HeaderSection =
    acter?.ActerType.name === ACTIVITY
      ? ActivityHeaderSection
      : ActerHeaderSection

  return (
    <Grid className={classes.header} container>
      <Grid container spacing={2} className={classes.headerContent}>
        <HeaderSection acter={acter} />
      </Grid>

      <Grid container spacing={2} className={classes.content}>
        {children}
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    headerContent: {
      justifyContent: 'center',
    },
    content: {
      justifyContent: 'center',
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
    },
  })
)
