import React, { FC, useState } from 'react'

import { Box, makeStyles, createStyles, Theme } from '@material-ui/core'

import clsx from 'clsx'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { PostForm, PostFormValues } from '@acter/components/posts/form'
import { AddPostReactions } from '@acter/components/posts/post/add-reactions'
import { PostContent } from '@acter/components/posts/post/content'
import { PostOptions } from '@acter/components/posts/post/options'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { useActer } from '@acter/lib/acter/use-acter'
import { useDeletePost } from '@acter/lib/post/use-delete-post'
import { useUpdatePost } from '@acter/lib/post/use-update-post'
import { Post as PostType, User } from '@acter/schema'

export interface PostsProps {
  user: User
  post?: PostType
  parentId?: string
}

export const Post: FC<PostsProps> = ({ user, post, parentId }) => {
  const classes = useStyles()
  const [toggleForm, setToggleForm] = useState(false)
  const { acter } = useActer()

  const [{ fetching: updateFetching }, updatePost] = useUpdatePost()
  const [{ fetching: deleteFetching }, deletePost] = useDeletePost()

  const handleEdit = () => setToggleForm(!toggleForm)
  const handleCancelEdit = () => setToggleForm(!toggleForm)

  const handleSubmit = (values: PostFormValues) => {
    setToggleForm(!toggleForm)
    updatePost(values)
  }

  const handleDelete = () => deletePost(post)

  if (updateFetching || deleteFetching) return <LoadingSpinner />

  const isMember = checkMemberAccess(user, acter)

  if (toggleForm) {
    return (
      <Box className={classes.post}>
        <ActerAvatar acter={post.Author} size={parentId ? 4 : 6} />
        <PostForm
          post={post}
          parentId={parentId}
          onPostUpdate={handleSubmit}
          onCancel={handleCancelEdit}
        />
      </Box>
    )
  } else {
    return (
      <Box className={clsx(classes.post, parentId && classes.comment)}>
        <ActerAvatar acter={post.Author} size={parentId ? 4 : 6} />
        <PostContent post={post} />

        <Box className={classes.options}>
          {post.PostReactions.length === 0 && isMember && (
            <AddPostReactions
              postId={post.id}
              isComment={Boolean(post.parentId)}
            />
          )}
          {user?.Acter?.id === post.Author.id && (
            <PostOptions onEdit={handleEdit} onDelete={handleDelete} />
          )}
        </Box>
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
      backgroundColor: theme.colors.grey.extraLight,
      borderRadius: theme.spacing(1),
      marginBottom: theme.spacing(1.3),
      padding: theme.spacing(1),
      display: 'flex',
      alignItems: 'flex-start',
    },
    options: {
      display: 'flex',
    },
  })
)
