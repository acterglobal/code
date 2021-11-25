import React, { FC } from 'react'

import { Grid, makeStyles, createStyles, Theme } from '@material-ui/core'

import { LandingPageLayout } from '@acter/components/acter/landing-page/layout'
import { MembersSection } from '@acter/components/acter/landing-page/members-section'

export const ActerMembers: FC = () => {
  const classes = useStyles({})

  return (
    <LandingPageLayout>
      <Grid className={classes.main} item xs={12} sm={12} md={8} xl={10}>
        <MembersSection />
      </Grid>
    </LandingPageLayout>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      order: 1,
      margin: 'auto',
      borderRadius: 6,
      backgroundColor: theme.colors.white,
      '&.MuiGrid-item': {
        padding: theme.spacing(6),
        paddingTop: theme.spacing(1),
      },
    },
  })
)
