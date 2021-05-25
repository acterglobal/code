import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { Box } from '@material-ui/core'
import { Post } from 'src/components/posts/post'
import { PostForm, PostFormProps } from 'src/components/posts/form'
import { Post as Posts } from '@schema'

export interface PostListProps extends PostFormProps {
  posts: Posts[]
  user: User
  onCommentCreate: (data: any) => void
}

export const PostList: FC<PostListProps> = ({ posts, user, onPostSubmit }) => {
  const classes = useStyles()

  const handleSubmit = (values) => {
    onCommentCreate(values)
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.mainContainer}>
        <PostForm user={user} onPostSubmit={onPostSubmit} />
        {posts?.map((post) => (
          <Box key={post.id} className={classes.contentContainer}>
            <Post post={post}> 
              {post.Comments?.map((comment) => (
                <Box key={comment.id} className={classes.contentContainer}>
                  <Post key={comment.id} post={comment} commenting />
                </Box>
              ))}
              <PostForm post={post} user={user} onSubmit={handleSubmit} />
            </Box>
          ))}
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: grey[200],
      width: 800,
      overflow: 'hidden',
      justifyContent: 'center',
      padding: theme.spacing(2),
    },
    mainContainer: {
      backgroundColor: 'white',
      borderRadius: 7,
      width: '95%',
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: theme.spacing(1),
      padding: theme.spacing(0.1),
      [theme.breakpoints.down('xs')]: {
        width: 300,
      },
    },
    postItems: {
      width: '100%',
    },
    contentContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      padding: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        width: 300,
      },
    },
    image: {
      marginTop: theme.spacing(3),
      objectFit: 'cover',
      border: '1px solid black',
      width: 30,
      height: 30,
      padding: theme.spacing(0.8),
      borderRadius: '50%',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  })
)
