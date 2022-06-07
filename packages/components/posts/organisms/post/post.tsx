import React, { useState, FC } from 'react'

import { Box, Divider } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { PostContainer } from '@acter/components/posts/organisms/container'
import { PostFormSection } from '@acter/components/posts/organisms/form/post-form-section'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'
import { Post as PostType } from '@acter/schema'

interface SinglePostProps {
  post: PostType
  acterId?: string
}

export const Post: FC<SinglePostProps> = ({ post, acterId }) => {
  const classes = useStyles()
  const { user } = useUser()
  const { acter } = useActer({ acterId })
  const [hasMoreComments, setHasMoreComments] = useState(
    post.Comments.length > 5
  )

  if (!acter || !user) return null

  const isMember = checkMemberAccess(user, acter)

  const comments = post.Comments
    ? post.Comments.slice(0, post.Comments.length - 1).reverse()
    : []

  return (
    <Box className={classes.contentContainer}>
      <PostContainer post={post} user={user} />
      <Box className={classes.commentSection}>
        {comments.length !== 0 && (
          <>
            <Divider className={classes.divider} />
            {hasMoreComments && <>Load more comments</>}
            {comments.map((comment) => {
              return (
                <PostContainer
                  key={`post-${post.id}-comment-${comment.id}`}
                  post={comment}
                  parentId={post.id}
                  user={user}
                />
              )
            })}
          </>
        )}

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
