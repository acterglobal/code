import React, { FC } from 'react'

import { Box, Theme, Typography } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { ArrowBackSharp as BackIcon } from '@mui/icons-material'

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
          <BackIcon
            fontSize="inherit"
            color="inherit"
            className={classes.icon}
          />{' '}
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
      marginLeft: theme.spacing(5),
    },
    icon: {
      color: theme.palette.secondary.main,
      fontSize: '1.2rem',
    },
    backLink: {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: '0.9rem',
      color: theme.palette.secondary.main,
      marginLeft: theme.spacing(0.5),
    },
    postContainer: {
      marginTop: theme.spacing(1.5),
      marginLeft: theme.spacing(5),
    },
  })
)
