import React, { FC, useState } from 'react'

import { Box, Theme } from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import clsx from 'clsx'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { PostForm, PostFormValues } from '@acter/components/posts/form'
import { PostContent } from '@acter/components/posts/post/content'
import { PostOptions } from '@acter/components/posts/post/options'
import { AddPostReaction } from '@acter/components/posts/reactions/add-reaction'
import { blueGrey } from '@acter/components/themes/colors'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { useActer } from '@acter/lib/acter/use-acter'
import { useDeletePost } from '@acter/lib/post/use-delete-post'
import { useUpdatePost } from '@acter/lib/post/use-update-post'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole, Post as PostType, User } from '@acter/schema'

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

  const isAuthor = user?.Acter?.id === post.Author.id
  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
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
            <AddPostReaction
              postId={post.id}
              isComment={Boolean(post.parentId)}
            />
          )}
          {(isAuthor || isAdmin) && (
            <PostOptions
              onEdit={handleEdit}
              onDelete={handleDelete}
              isAuthor={isAuthor}
            />
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
      backgroundColor: blueGrey.A100,
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
