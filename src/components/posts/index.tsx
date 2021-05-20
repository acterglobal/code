import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { Box } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import { Posts as SinglePost } from 'src/components/posts/post'
import { PostForm as CommentForm } from 'src/components/posts/form'
import { Post, User } from '@schema'

export interface PostsProps {
  post: Post
  user: User
  onPostCreate: (data: string) => void
}

export const Posts: FC<PostsProps> = ({ post, user, onPostCreate }) => {
  const classes = useStyles()

  const handleSubmit = (values, submitProps) => {
    submitProps.resetForm()
    onPostCreate(values.postText)
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.mainContainer}>
        <CommentForm user={user} onSubmit={handleSubmit} />
      </Box>
      <Box className={classes.mainContainer}>
        <Box className={classes.contentContainer}>
          <SinglePost post={post} />
        </Box>

        <Divider className={classes.divider} />
        {/* 
        {post.Comments.map((comment, index) => (
          <Box key={index} className={classes.contentContainer}>
            <SinglePost post={comment} comment />
          </Box>
        ))}
        <CommentForm user={user} comment onSubmit={handleSubmit} /> */}
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
    contentContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      padding: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        width: 300,
      },
    },
    divider: {
      color: grey[700],
      marginLeft: 30,
      marginBottom: 10,
      width: '95%',
      height: 2,
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
