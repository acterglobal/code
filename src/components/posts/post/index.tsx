import React, { FC, useState } from 'react'
import { Box, makeStyles, createStyles, Theme } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { ActerAvatar } from 'src/components/acter/avatar'
import { Post as PostType, User } from '@schema'
import clsx from 'clsx'
import { PostForm, PostFormValues } from 'src/components/posts/form'
import { PostContent } from 'src/components/posts/post/content'
import { PostOptions } from './options'

export interface PostsProps {
  user: User
  post?: PostType
  parentPost?: PostType
  onPostDelete: (post: PostType) => Promise<void>
  onPostUpdate?: (values: PostFormValues) => Promise<void>
}

export const Post: FC<PostsProps> = ({
  post,
  parentPost,
  onPostUpdate,
  onPostDelete,
}) => {
  const classes = useStyles()
  const [toggleForm, setToggleForm] = useState(false)

  const handleEdit = () => {
    setToggleForm(!toggleForm)
  }

  const handleCancel = () => {
    setToggleForm(!toggleForm)
  }

  const handleSubmit = (values: PostFormValues) => {
    setToggleForm(!toggleForm)
    onPostUpdate(values)
  }

  const onDelete = () => {
    onPostDelete(post)
  }

  if (toggleForm) {
    return (
      <Box className={clsx(classes.post, parentPost && classes.comment)}>
        <ActerAvatar acter={post.Author} size={parentPost ? 4 : 6} />
        <PostForm
          post={post}
          parentPost={parentPost}
          onPostUpdate={handleSubmit}
          onCancel={handleCancel}
        />
      </Box>
    )
  }

  return (
    <Box className={clsx(classes.post, parentPost && classes.comment)}>
      <ActerAvatar acter={post.Author} size={parentPost ? 4 : 6} />
      <PostContent post={post} />

      <PostOptions onEdit={handleEdit} onDelete={onDelete} />
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
