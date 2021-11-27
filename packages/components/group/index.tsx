import React, { FC } from 'react'

import {
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Theme,
} from '@material-ui/core'

import { LandingPageLayout } from '@acter/components/group/layout'
import { DescriptionSection } from '@acter/components/group/sections/description'
import { LinksSection } from '@acter/components/group/sections/links'
import { MembersSection } from '@acter/components/group/sections/members'
import { UpcomingActivities } from '@acter/components/group/sections/upcoming-activities'
import { PostList } from '@acter/components/posts'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'

export const GroupLanding: FC = () => {
  const classes = useStyles()

  const { acter, fetching: acterLoading } = useActer()

  if (acterLoading) return <LoadingSpinner />
  if (!acter) return null

  return (
    <LandingPageLayout>
      <Grid container spacing={0} className={classes.content}>
        <Grid item xs={12} md={8} className={classes.posts}>
          <PostList />
        </Grid>

        <Hidden smDown>
          <Grid item md={4} className={classes.items}>
            <UpcomingActivities />
            <LinksSection />
            <DescriptionSection />
            <MembersSection />
          </Grid>
        </Hidden>
      </Grid>
    </LandingPageLayout>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      marginTop: theme.spacing(4),
    },
    posts: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(8),
    },
    items: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(6),
    },
  })
)
