import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Markdown from 'markdown-to-jsx'
import { grey } from '@material-ui/core/colors'
import { Box, Typography } from '@material-ui/core'
import { PostInfo, PostInfoProps } from '@acter/components/posts/post/info'

type PostContentProps = PostInfoProps

export const PostContent: FC<PostContentProps> = ({ post }) => {
  const classes = useStyles()
  return (
    <Box className={classes.postContent}>
      <PostInfo post={post} />

      <Box>
        <Typography variant="caption" className={classes.description}>
          <Markdown>{post.content}</Markdown>
        </Typography>
      </Box>
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
      color: grey[700],
      fontSize: 12,
      hyphens: 'auto',
      overflow: 'hidden',
    },
  })
)