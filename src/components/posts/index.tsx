import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { Box, Divider } from '@material-ui/core'
import { Post, PostsProps } from 'src/components/posts/post'
import { PostForm, PostFormProps } from 'src/components/posts/form'
import { userHasRoleOnActer } from 'src/lib/user/user-has-role-on-acter'
import { Acter, ActerConnectionRole, Post as PostType, User } from '@schema'

export interface PostListProps extends PostFormProps, PostsProps {
  /**
   * Acter on which we are viewing posts
   */
  acter: Acter
  /**
   * User viewing posts
   */
  user: User
  /**
   * Posts to display
   */
  posts: PostType[]
}

export const PostList: FC<PostListProps> = ({
  acter,
  user,
  posts,
  onPostSubmit,
  onPostDelete,
}) => {
  const classes = useStyles()

  const isUserActerFollower = acter.Followers.find(
    ({ Follower }) => Follower.id === user?.Acter.id
  )

  if (!user || !isUserActerFollower) {
    return null
  }

  return (
    <Box className={classes.mainContainer}>
      {userHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter) && (
        <PostForm user={user} onPostSubmit={onPostSubmit} />
      )}
      {posts?.map((post) => (
        <Box key={`post-${post.id}`} className={classes.contentContainer}>
          <Post post={post} onPostDelete={onPostDelete} />
          <Divider variant="middle" className={classes.divider} />
          {post.Comments?.map((comment) => (
            <Post
              key={`post-${post.id}-comment-${comment.id}`}
              post={comment}
              commenting
              onPostDelete={onPostDelete}
            />
          ))}
          <Box>
            <PostForm post={post} user={user} onPostSubmit={onPostSubmit} />
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
      width: '90%',
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
      [theme.breakpoints.down('xs')]: {
        width: 300,
      },
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    divider: {
      backgroundColor: grey[500],
      marginTop: 8,
      marginBottom: 16,
    },
    commentSection: {
      marginLeft: theme.spacing(6),
    },
  })
)
