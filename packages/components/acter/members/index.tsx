import React, { FC } from 'react'

import { Grid, makeStyles, createStyles, Theme } from '@material-ui/core'

import { InfoSection } from '@acter/components/acter/landing-page/info-section'
import { LandingPageLayout } from '@acter/components/acter/landing-page/layout'
import { MembersSection } from '@acter/components/acter/landing-page/members-section'

export const ActerMembers: FC = () => {
  const classes = useStyles({})

  return (
    <LandingPageLayout>
      <Grid className={classes.main} item xs={12} sm={12} md={8} xl={10}>
        <MembersSection />
      </Grid>
      <Grid className={classes.info} item xs={12} sm={12} md={4} xl={2}>
        <InfoSection />
      </Grid>
    </LandingPageLayout>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      order: 1,
      margin: 'auto',
      marginTop: theme.spacing(1.1),
      borderRadius: 6,
      backgroundColor: theme.colors.white,
      '&.MuiGrid-item': {
        padding: theme.spacing(6),
        paddingTop: theme.spacing(1),
      },
    },
    info: {
      order: 2,
    },
  })
)
