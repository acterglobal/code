import React, { FC, useState } from 'react'

import { Box, makeStyles, createStyles, Theme } from '@material-ui/core'

import clsx from 'clsx'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { PostForm, PostFormValues } from '@acter/components/posts/form'
import { PostContent } from '@acter/components/posts/post/content'
import { PostOptions } from '@acter/components/posts/post/options'
import { AddPostReaction } from '@acter/components/posts/reactions/add-reaction'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { getFollowersByType } from '@acter/lib/acter/get-followers-by-type'
import { useActer } from '@acter/lib/acter/use-acter'
import { MemberType } from '@acter/lib/constants'
import { useDeletePost } from '@acter/lib/post/use-delete-post'
import { useUpdatePost } from '@acter/lib/post/use-update-post'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole, Post as PostType, User } from '@acter/schema'

const { PEOPLE } = MemberType

export interface PostsProps {
  user: User
  post?: PostType
  parentId?: string
  handleOpenSidePanel: (data: string) => void
}

export const Post: FC<PostsProps> = ({
  user,
  post,
  parentId,
  handleOpenSidePanel,
}) => {
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

  const validFollowers = getFollowersByType(acter, PEOPLE)

  if (toggleForm) {
    return (
      <Box className={classes.post}>
        <ActerAvatar acter={post.Author} size={parentId ? 4 : 6} />
        <PostForm
          post={post}
          parentId={parentId}
          onPostUpdate={handleSubmit}
          onCancel={handleCancelEdit}
          followers={validFollowers}
        />
      </Box>
    )
  } else {
    return (
      <Box className={clsx(classes.post, parentId && classes.comment)}>
        <ActerAvatar acter={post.Author} size={parentId ? 4 : 6} />
        <PostContent post={post} handleOpenSidePanel={handleOpenSidePanel} />

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
