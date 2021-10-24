import React, { FC } from 'react'
import { di } from 'react-magnetic-di/macro'

import { Box, Divider } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { PostFormSection } from '@acter/components/posts/form/post-form-section'
import { Post } from '@acter/components/posts/post/index'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { usePosts } from '@acter/lib/post/use-posts'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole, ActerJoinSettings } from '@acter/schema'

export const PostList: FC = () => {
  di(useActer, usePosts, useUser)
  const classes = useStyles()

  const { posts, loading: postsLoading } = usePosts()
  const { user, loading: userLoading } = useUser()
  const { acter, loading: acterLoading } = useActer()

  if (acterLoading || userLoading || postsLoading) return <LoadingSpinner />
  if (!acter) return null

  const isUserActerFollower = acter.Followers.find(
    ({ Follower }) => Follower.id === user?.Acter.id
  )

  const isActerPublic = acter.acterJoinSetting === ActerJoinSettings.EVERYONE

  if (!isActerPublic && (!user || !isUserActerFollower)) return null

  const isMember = userHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter)

  return (
    <Box className={classes.mainContainer}>
      {isMember && <PostFormSection user={user} />}

      {(isActerPublic || isMember) && (
        <>
          {posts?.map((post) => (
            <Box key={`post-${post.id}`} className={classes.contentContainer}>
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

                {isMember && <PostFormSection parentId={post.id} user={user} />}
              </Box>
            </Box>
          ))}
        </>
      )}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      borderRadius: 7,
      width: '80%',
      margin: 'auto',
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        width: 300,
      },
    },
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
