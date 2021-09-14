import React, { FC } from 'react'
import { Grid, makeStyles, createStyles } from '@material-ui/core'
import {
  InfoSection,
  InfoSectionProps,
} from '@acter/components/acter/landing-page/info-section'
import { PostList, PostListProps } from '@acter/components/posts'
import {
  LandingPageLayout,
  LandingPageLayoutProps,
} from '@acter/components/acter/landing-page/layout'

export type ActerPostsProps = LandingPageLayoutProps &
  InfoSectionProps &
  PostListProps

export const ActerPosts: FC<ActerPostsProps> = ({
  acter,
  interestTypes,
  posts,
  user,
  onJoin,
  onLeave,
  loading,
  onPostSubmit,
  onPostDelete,
  onPostUpdate,
}) => {
  const classes = useStyles({})

  return (
    <LandingPageLayout
      acter={acter}
      user={user}
      onJoin={onJoin}
      onLeave={onLeave}
      loading={loading}
    >
      <Grid className={classes.main} item xs={12} sm={12} md={8} xl={10}>
        <PostList
          user={user}
          acter={acter}
          posts={posts}
          onPostSubmit={onPostSubmit}
          onPostDelete={onPostDelete}
          onPostUpdate={onPostUpdate}
        />
      </Grid>
      <Grid className={classes.info} item xs={12} sm={12} md={4} xl={2}>
        <InfoSection acter={acter} interestTypes={interestTypes} />
      </Grid>
    </LandingPageLayout>
  )
}

const useStyles = makeStyles(
  createStyles({
    // TODO: refactor
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
