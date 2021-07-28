import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Box, Divider } from '@material-ui/core'
import { Post, PostsProps } from '@acter/components/posts/post/index'
import { PostFormSection } from '@acter/components/posts/form/post-form-section'
import { PostFormProps, PostFormValues } from '@acter/components/posts/form'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { Acter, ActerConnectionRole, Post as PostType } from '@acter/schema'
import { useUser } from '@acter/lib/user/use-user'

export interface PostListProps
  extends Omit<PostFormProps, 'user'>,
    Omit<PostsProps, 'user'> {
  /**
   * Acter on which we are viewing posts
   */
  acter: Acter
  /**
   * Posts to display
   */
  posts: PostType[]
  /**
   * Callback function to update Posts
   */
  onPostUpdate?: (values: PostFormValues) => Promise<void>
}

export const PostList: FC<PostListProps> = ({
  acter,
  posts,
  onPostSubmit,
  onPostDelete,
  onPostUpdate,
}) => {
  const classes = useStyles()

  const [user] = useUser()

  const isUserActerFollower = acter.Followers.find(
    ({ Follower }) => Follower.id === user?.Acter.id
  )

  if (!user || !isUserActerFollower) {
    return null
  }

  return (
    <Box className={classes.mainContainer}>
      {userHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter) && (
        <PostFormSection user={user} onPostSubmit={onPostSubmit} />
      )}
      {posts?.map((post) => (
        <Box key={`post-${post.id}`} className={classes.contentContainer}>
          <Post
            post={post}
            user={user}
            onPostUpdate={onPostUpdate}
            onPostDelete={onPostDelete}
          />
          <Box className={classes.commentSection}>
            <Divider className={classes.divider} />
            {post.Comments?.map((comment) => (
              <Post
                key={`post-${post.id}-comment-${comment.id}`}
                post={comment}
                parentId={post.id}
                user={user}
                onPostUpdate={onPostUpdate}
                onPostDelete={onPostDelete}
              />
            ))}
            <Box>
              <PostFormSection
                parentId={post.id}
                user={user}
                onPostSubmit={onPostSubmit}
              />
            </Box>
          </Box>
        </Box>
      ))}
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
