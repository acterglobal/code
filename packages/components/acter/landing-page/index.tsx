import React, { FC } from 'react'

import { useRouter } from 'next/router'

import { Grid, Box, makeStyles, createStyles } from '@material-ui/core'

import {
  InfoSection,
  InfoSectionProps,
} from '@acter/components/acter/landing-page/info-section'
import {
  LandingPageLayout,
  LandingPageLayoutProps,
} from '@acter/components/acter/landing-page/layout'
import {
  MembersSection,
  MembersSectionProps,
} from '@acter/components/acter/landing-page/members-section'
import { PostList, PostListProps } from '@acter/components/posts'
import { getLandingPageTab } from '@acter/lib/acter/get-landing-page-tab'
import { useActer } from '@acter/lib/acter/use-acter'
import { ActerMenu } from '@acter/lib/constants'

const { MEMBERS, FORUM } = ActerMenu

export type ActerLandingProps = LandingPageLayoutProps &
  InfoSectionProps &
  MembersSectionProps &
  PostListProps

export const ActerLanding: FC<ActerLandingProps> = ({
  interestTypes,
  posts,
  onJoin,
  onLeave,
  onConnectionStateChange,
  loading,
  onPostSubmit,
  onPostDelete,
  onPostUpdate,
}) => {
  const classes = useStyles({})
  const router = useRouter()
  const tab = getLandingPageTab(router, FORUM)

  const { acter, loading: acterLoading } = useActer()

  if (acterLoading || !acter) return null

  return (
    <LandingPageLayout onJoin={onJoin} onLeave={onLeave} loading={loading}>
      <Grid className={classes.main} item xs={12} sm={12} md={8} xl={10}>
        <Box role="tabpanel" hidden={tab !== MEMBERS}>
          <MembersSection onConnectionStateChange={onConnectionStateChange} />
        </Box>
        <Box
          role="tabpanel"
          hidden={tab !== FORUM}
          className={classes.postList}
        >
          <PostList
            posts={posts}
            onPostSubmit={onPostSubmit}
            onPostDelete={onPostDelete}
            onPostUpdate={onPostUpdate}
          />
        </Box>
      </Grid>
      <Grid className={classes.info} item xs={12} sm={12} md={4} xl={2}>
        <InfoSection acter={acter} interestTypes={interestTypes} />
      </Grid>
    </LandingPageLayout>
  )
}

const useStyles = makeStyles(
  createStyles({
    menu: {
      order: 1,
    },
    main: {
      order: 2,
    },
    info: {
      order: 3,
    },
    postList: {
      marginLeft: 10,
    },
  })
)
