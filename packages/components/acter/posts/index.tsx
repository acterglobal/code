import React, { FC } from 'react'

import { Grid, makeStyles, createStyles } from '@material-ui/core'

import { InfoSection } from '@acter/components/acter/landing-page/info-section'
import { LandingPageLayout } from '@acter/components/acter/landing-page/layout'
import { PostList } from '@acter/components/posts'

export const ActerPosts: FC = () => {
  const classes = useStyles({})

  return (
    <LandingPageLayout>
      <Grid className={classes.main} item xs={12} sm={12} md={8} xl={10}>
        <PostList />
      </Grid>
      <Grid className={classes.info} item xs={12} sm={12} md={4} xl={2}>
        <InfoSection />
      </Grid>
    </LandingPageLayout>
  )
}

const useStyles = makeStyles(
  createStyles({
    main: {
      order: 1,
    },
    info: {
      order: 2,
    },
  })
)
