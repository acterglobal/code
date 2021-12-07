import React, { FC } from 'react'

import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Typography,
} from '@material-ui/core/'

import { AddPostReactions } from '@acter/components/posts/post/add-post-reactions'
import { Post } from '@acter/schema'

interface PostReactionsProps {
  post: Post
}
export const PostReactions: FC<PostReactionsProps> = ({ post }) => {
  const classes = useStyles()
  console.log('POST...', post)
  return (
    <Box className={classes.postReactions}>
      {post.PostReactions?.map((reaction) => (
        <Typography className={classes.emoji}>{reaction.emoji}</Typography>
      ))}
      <AddPostReactions postId={post.id} />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    postReactions: {
      display: 'flex',
      height: 30,
      width: 100,
    },
    emoji: {
      fontSize: 20,
    },
  })
)
