import React, { FC } from 'react'
import { Box, makeStyles, createStyles, Theme } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { ActerAvatar } from 'src/components/acter/avatar'
import { Post as PostType } from '@schema'
import clsx from 'clsx'
import { PostContent } from 'src/components/posts/post/content'
import { PostOptions } from './options'

export interface PostsProps {
  post?: PostType
  commenting?: boolean
  onPostDelete: (post: PostType) => Promise<void>
}

export const Post: FC<PostsProps> = ({ post, commenting, onPostDelete }) => {
  const classes = useStyles()

  const onDelete = () => {
    onPostDelete(post)
  }

  return (
    <Box className={clsx(classes.post, commenting && classes.comment)}>
      <ActerAvatar acter={post.Author} size={commenting ? 4 : 6} />

      <PostContent post={post} />

      <PostOptions onDelete={onDelete} />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    post: {
      display: 'flex',
      flexDirection: 'row',
      padding: theme.spacing(0.6),
      paddingTop: theme.spacing(1.2),
    },
    comment: {
      backgroundColor: grey[200],
      borderRadius: theme.spacing(1),
      marginBottom: theme.spacing(1.3),
      padding: theme.spacing(1),
      display: 'flex',
      alignItems: 'flex-start',
    },
  })
)
