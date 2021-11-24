import React, { FC } from 'react'

import { useRouter } from 'next/router'

import { Grid, makeStyles, createStyles, Theme } from '@material-ui/core'

import { InfoSection } from '@acter/components/acter/landing-page/info-section'
import { LandingPageLayout } from '@acter/components/acter/landing-page/layout'
import { SinglePostSection } from '@acter/components/acter/posts/single-post-section'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'
import { usePost } from '@acter/lib/post/use-post'
import { useUser } from '@acter/lib/user/use-user'

export const ActerPost: FC = () => {
  const classes = useStyles()
  const router = useRouter()
  const postId = router.query?.id as string
  const { post, fetching: postLoading } = usePost({ postId })
  const { user, fetching: userLoading } = useUser()
  const { acter, fetching: acterLoading } = useActer()

  if (postLoading || userLoading || acterLoading) return <LoadingSpinner />

  if (!post || !user || !acter) return null

  return (
    <LandingPageLayout>
      <Grid className={classes.post} item xs={12} sm={12} md={8} xl={10}>
        <SinglePostSection post={post} redirectUrl={acterAsUrl({ acter })} />
      </Grid>
      <Grid className={classes.info} item xs={12} sm={12} md={4} xl={2}>
        <InfoSection />
      </Grid>
    </LandingPageLayout>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    post: {
      order: 1,
      '&.MuiGrid-item': {
        paddingRight: theme.spacing(10),
        paddingLeft: theme.spacing(4),
      },
    },
    info: {
      order: 2,
    },
  })
)
