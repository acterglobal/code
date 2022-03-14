import React, { FC } from 'react'

import { Box, Divider } from '@mui/material'
import { Theme } from '@mui/material/styles'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { PostFormSection } from '@acter/components/posts/form/post-form-section'
import { Post } from '@acter/components/posts/post/index'
import { blueGrey } from '@acter/components/themes/colors'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'
import { Post as PostType } from '@acter/schema'

interface SinglePostProps {
  post: PostType
  acterId?: string
}

export const SinglePost: FC<SinglePostProps> = ({ post, acterId }) => {
  const classes = useStyles()
  const { user } = useUser()
  const { acter } = useActer({ acterId })

  if (!acter || !user) return null

  const isMember = checkMemberAccess(user, acter)

  return (
    <Box className={classes.contentContainer}>
      <Post post={post} user={user} />
      <Box className={classes.commentSection}>
        {post.Comments.length !== 0 && <Divider className={classes.divider} />}

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
      [theme.breakpoints.down('sm')]: {
        width: 300,
      },
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      whiteSpace: 'pre-line',
    },
    divider: {
      backgroundColor: blueGrey.A200,
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
