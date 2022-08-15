import React, { FC } from 'react'

import { Box, Divider } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { PostFormSection } from '@acter/components/posts/form/post-form-section'
import { Post } from '@acter/components/posts/post/index'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { getFollowersByType } from '@acter/lib/acter/get-followers-by-type'
import { useActer } from '@acter/lib/acter/use-acter'
import { MemberType } from '@acter/lib/constants'
import { useUser } from '@acter/lib/user/use-user'
import { Post as PostType } from '@acter/schema'

const { PEOPLE } = MemberType

interface SinglePostProps {
  post: PostType
  acterId?: string
  handleOpenSidePanel: (data: string) => void
}

export const SinglePost: FC<SinglePostProps> = ({
  post,
  acterId,
  handleOpenSidePanel,
}) => {
  const classes = useStyles()
  const { user } = useUser()
  const { acter } = useActer({ acterId })

  if (!acter || !user) return null

  const isMember = checkMemberAccess(user, acter)

  const validFollowers = getFollowersByType(acter, PEOPLE)

  return (
    <Box className={classes.contentContainer}>
      <Post post={post} user={user} handleOpenSidePanel={handleOpenSidePanel} />
      <Box className={classes.commentSection}>
        {post.Comments.length !== 0 && <Divider className={classes.divider} />}

        {post.Comments?.map((comment) => (
          <Post
            key={`post-${post.id}-comment-${comment.id}`}
            post={comment}
            parentId={post.id}
            user={user}
            handleOpenSidePanel={handleOpenSidePanel}
          />
        ))}

        {isMember && (
          <PostFormSection
            parentId={post.id}
            user={user}
            acterId={acterId}
            followers={validFollowers}
          />
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
