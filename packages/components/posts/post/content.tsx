import React, { FC } from 'react'

import { Box, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

import Markdown from 'markdown-to-jsx'

import { PostInfo, PostInfoProps } from '@acter/components/posts/post/info'
import { PostReactions } from '@acter/components/posts/reactions'

type PostContentProps = PostInfoProps

export const PostContent: FC<PostContentProps> = ({ post }) => {
  const classes = useStyles()
  return (
    <Box className={classes.postContent}>
      <PostInfo post={post} />

      <Typography variant="caption" className={classes.description}>
        {post.content && <Markdown>{post.content}</Markdown>}
      </Typography>

      <PostReactions post={post} />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    postContent: {
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(0.6),
      borderRadius: theme.spacing(1),
      width: '100%',
    },
    description: {
      color: theme.palette.secondary.dark,
      fontSize: '0.813rem',
      hyphens: 'auto',
      overflow: 'hidden',
    },
  })
)
