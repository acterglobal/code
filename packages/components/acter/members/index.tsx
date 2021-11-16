import React, { FC } from 'react'

import { Grid, makeStyles, createStyles } from '@material-ui/core'

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

const useStyles = makeStyles(
  createStyles({
    main: {
      order: 1,
      margin: 'auto',
    },
  })
)
