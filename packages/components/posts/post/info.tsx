import React, { FC } from 'react'

import { Box, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

import { getPostTimeStamp } from '@acter/lib/post/get-post-timestamp'
import { Post } from '@acter/schema'

export interface PostInfoProps {
  post: Post
}

export const PostInfo: FC<PostInfoProps> = ({ post }) => {
  const classes = useStyles()
  return (
    <Box>
      <Box className={classes.topSection}>
        <Typography variant="h6" className={classes.title}>
          {post.Author.name}
        </Typography>
        <Typography variant="body2" className={classes.timeStamp}>
          {getPostTimeStamp(post.updatedAt)}
        </Typography>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    acterTypeName: {
      color: theme.palette.secondary.main,
      fontSize: 11,
    },
    title: {
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 11,
      marginBottom: 0,
      lineHeight: 1,
    },
    topSection: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(1),
    },
    timeStamp: {
      fontSize: 9,
      marginLeft: theme.spacing(1),
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.secondary.main,
    },
  })
)
