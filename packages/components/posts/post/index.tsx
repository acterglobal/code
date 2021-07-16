import React, { FC, useState } from 'react'
import { Box, makeStyles, createStyles, Theme } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { ActerAvatar } from '@acter/components/acter/avatar'
import { Post as PostType, User } from '@acter/schema/types'
import clsx from 'clsx'
import { PostForm, PostFormValues } from '@acter/components/posts/form'
import { PostContent } from '@acter/components/posts/post/content'
import { PostOptions } from './options'

export interface PostsProps {
  user: User
  post?: PostType
  parentId?: string
  onPostDelete: (post: PostType) => Promise<void>
  onPostUpdate?: (values: PostFormValues) => Promise<void>
}

export const Post: FC<PostsProps> = ({
  user,
  post,
  parentId,
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
      <Box className={clsx(classes.post, parentId && classes.comment)}>
        <ActerAvatar acter={post.Author} size={parentId ? 4 : 6} />
        <PostForm
          post={post}
          parentId={parentId}
          onPostUpdate={handleSubmit}
          onCancel={handleCancel}
        />
      </Box>
    )
  } else {
    return (
      <Box className={clsx(classes.post, parentId && classes.comment)}>
        <ActerAvatar acter={post.Author} size={parentId ? 4 : 6} />
        <PostContent post={post} />

        {user.Acter.id === post.Author.id && (
          <PostOptions onEdit={handleEdit} onDelete={onDelete} />
        )}
      </Box>
    )
  }
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
