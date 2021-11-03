import React, { FC } from 'react'

import { useRouter } from 'next/router'

import {
  Grid,
  makeStyles,
  createStyles,
  Box,
  Typography,
  Theme,
} from '@material-ui/core'
import { ArrowBackSharp as BackIcon } from '@material-ui/icons'

import { InfoSection } from '@acter/components/acter/landing-page/info-section'
import { LandingPageLayout } from '@acter/components/acter/landing-page/layout'
import { SinglePost } from '@acter/components/posts/single-post'
import { Link } from '@acter/components/util/anchor-link'
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
      <Grid className={classes.main} item xs={12} sm={12} md={8} xl={10}>
        <Link href={acterAsUrl({ acter })}>
          <Box className={classes.back}>
            <BackIcon fontSize="small" color="secondary" />{' '}
            <Typography className={classes.backLink}>Back to posts</Typography>
          </Box>
        </Link>
        <Box className={classes.postContainer}>
          {<SinglePost post={post} />}
        </Box>
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
    },
    info: {
      order: 2,
    },
    back: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(5),
      display: 'flex',
      width: theme.spacing(17),
    },
    backLink: {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: '0.9rem',
      color: theme.palette.secondary.main,
      marginLeft: theme.spacing(0.5),
    },
    postContainer: {
      width: '80%',
      marginTop: theme.spacing(1.5),
      marginLeft: theme.spacing(5),
    },
  })
)
