import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { Box } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import { PostBox } from 'src/components/posts/posts'
import { PostForm as CommentForm } from 'src/components/posts/post-form'
import { Post, User } from '@schema'

export interface PostsProps {
  post: Post
  user: User
}

export const Posts: FC<PostsProps> = ({ post, user }) => {
  const classes = useStyles()

  const initialValues = {
    commentInput: '',
  }

  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.mainContainer}>
        <CommentForm user={user} />
      </Box>
      <Box className={classes.mainContainer}>
        {/* <CommentForm user={user} /> */}
        <Box className={classes.contentContainer}>
          <PostBox post={post} />
        </Box>

        <Divider className={classes.divider} />

        {post.Comments.map((comment, index) => (
          <Box key={index} className={classes.contentContainer}>
            <PostBox post={comment} comment />
          </Box>
        ))}
        <CommentForm user={user} comment />
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
