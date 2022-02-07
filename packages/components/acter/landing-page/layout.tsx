import React, { FC } from 'react'

import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core'

import { HeaderSection } from '@acter/components/acter/landing-page/header-section'

export const LandingPageLayout: FC = ({ children }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.header} container>
      <Grid container spacing={2} className={classes.headerContent}>
        <HeaderSection />
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
