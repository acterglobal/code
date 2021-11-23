import React, { FC } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { ArrowBackSharp as BackIcon } from '@material-ui/icons'

import { SinglePost } from '@acter/components/posts/single-post'
import { Link } from '@acter/components/util/anchor-link'
import { Post } from '@acter/schema'

interface SinglePostSectionProps {
  post: Post
  redirectUrl: string
}

export const SinglePostSection: FC<SinglePostSectionProps> = ({
  post,
  redirectUrl,
}) => {
  const classes = useStyles()

  return (
    <>
      <Link href={redirectUrl}>
        <Box className={classes.back}>
          <BackIcon fontSize="small" color="secondary" />{' '}
          <Typography className={classes.backLink}>Back to posts</Typography>
        </Box>
      </Link>
      <Box className={classes.postContainer}>{<SinglePost post={post} />}</Box>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    back: {
      marginTop: theme.spacing(3),
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
