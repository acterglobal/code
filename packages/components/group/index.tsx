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
import { SettingsSection } from '@acter/components/group/sections/settings'
import { UpcomingActivities } from '@acter/components/group/sections/upcoming-activities'
import { PostList } from '@acter/components/posts'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

export const GroupLanding: FC = () => {
  const classes = useStyles()

  const { user } = useUser()
  const { acter } = useActer()

  if (!acter) return null

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  if (!isAdmin) return null

  return (
    <LandingPageLayout>
      <Grid container spacing={0} className={classes.content}>
        <Grid item xs={12} md={8} className={classes.posts}>
          <PostList />
        </Grid>

        <Hidden smDown>
          <Grid item md={4} className={classes.items}>
            <UpcomingActivities acter={acter} />
            <LinksSection acter={acter} />
            <DescriptionSection acter={acter} />
            <MembersSection acter={acter} />
            {isAdmin && <SettingsSection acter={acter} />}
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
