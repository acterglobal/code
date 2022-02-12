import React, { FC } from 'react'

import dynamic from 'next/dynamic'

import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core'

import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { ActerTypes } from '@acter/lib/constants'

const { ACTIVITY } = ActerTypes

export const LandingPageLayout: FC = ({ children }) => {
  const classes = useStyles()

  const { acter, fetching: acterLoading } = useActer()

  if (acterLoading) return <LoadingSpinner />
  if (!acter) return null

  const HeaderSection = dynamic(() =>
    acter?.ActerType.name === ACTIVITY
      ? import('@acter/components/activity/landing-page/header-section').then(
          (mod) => mod.HeaderSection
        )
      : import('@acter/components/acter/landing-page/header-section').then(
          (mod) => mod.HeaderSection
        )
  )

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
