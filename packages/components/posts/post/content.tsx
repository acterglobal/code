import React, { FC } from 'react'

import { Box, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { SanitizedContent } from '@acter/components/molecules/sanitized-content'
import { PostInfo, PostInfoProps } from '@acter/components/posts/post/info'
import { PostReactions } from '@acter/components/posts/reactions'

type PostContentProps = PostInfoProps

export const PostContent: FC<PostContentProps> = ({ post }) => {
  const classes = useStyles()

  return (
    <Box className={classes.postContent}>
      <PostInfo post={post} />

      {post.content && (
        <Typography variant="caption" className={classes.description}>
          <SanitizedContent isMarkdown={post.isMarkDown}>
            {post.content}
          </SanitizedContent>
        </Typography>
      )}

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
      overflowX: 'auto',
      padding: theme.spacing(1),
    },
    description: {
      color: theme.palette.secondary.dark,
      fontSize: '0.813rem',
      hyphens: 'auto',
      overflow: 'hidden',
    },
  })
)
