import React, { FC } from 'react'

import { Box, Divider } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { PostFormSection } from '@acter/components/posts/form/post-form-section'
import { Post } from '@acter/components/posts/post/index'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole, Post as PostType } from '@acter/schema'

interface SinglePostProps {
  post: PostType
  acterId?: string
}

export const SinglePost: FC<SinglePostProps> = ({ post, acterId }) => {
  const classes = useStyles()
  const { user } = useUser()
  const { acter } = useActer({ acterId })

  if (!acter || !user) return null

  const isMember = userHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter)

  return (
    <Box className={classes.contentContainer}>
      <Post post={post} user={user} />
      <Box className={classes.commentSection}>
        <Divider className={classes.divider} />
        {post.Comments?.map((comment) => (
          <Post
            key={`post-${post.id}-comment-${comment.id}`}
            post={comment}
            parentId={post.id}
            user={user}
          />
        ))}

        {isMember && (
          <PostFormSection parentId={post.id} user={user} acterId={acterId} />
        )}
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentContainer: {
      backgroundColor: 'white',
      borderRadius: 7,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
      [theme.breakpoints.down('xs')]: {
        width: 300,
      },
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      whiteSpace: 'pre-line',
    },
    divider: {
      backgroundColor: theme.colors.grey.main,
      marginTop: 8,
      marginBottom: 16,
    },
    commentSection: {
      marginLeft: theme.spacing(6),
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(1.5),
    },
  })
)
