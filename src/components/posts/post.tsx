import React, { FC, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Markdown from 'markdown-to-jsx'
import { grey } from '@material-ui/core/colors'
import { Box, Typography } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import { MoreVert as ThreeDotsIcon } from '@material-ui/icons'
import { DropdownMenu } from 'src/components/util/dropdown-menu'
import { PostForm, PostFormValues } from 'src/components/posts/form'
import { ActerAvatar } from 'src/components/acter/avatar'
import { Post as PostType, User } from '@schema'
import { _handleSubmit } from 'src/pages/profile'

export interface PostsProps {
  post: PostType
  user: User
  parentPost?: PostType
  commenting?: boolean
  onPostUpdate?: (values: PostFormValues) => Promise<void>
}

export const Post: FC<PostsProps> = ({
  post,
  commenting,
  user,
  parentPost,
  onPostUpdate,
}) => {
  const classes = useStyles()
  const [toggleForm, setToggleForm] = useState(false)

  const onEdit = () => {
    setToggleForm(!toggleForm)
  }

  const onCancel = () => {
    setToggleForm(!toggleForm)
  }

  const handleSubmit = (values: PostFormValues) => {
    setToggleForm(!toggleForm)
    onPostUpdate(values)
  }

  return (
    <>
      {toggleForm ? (
        <PostForm
          user={user}
          post={post}
          parentPost={parentPost}
          onPostUpdate={handleSubmit}
          cancelForm={onCancel}
        />
      ) : (
        <Box className={classes.postItems}>
          <ActerAvatar acter={post.Author} size={commenting ? 4 : 6} />
          <Box
            className={
              commenting ? classes.commentContainer : classes.postContainer
            }
          >
            <Box>
              <Typography variant="subtitle1" className={classes.title}>
                {post.Author.name}
              </Typography>
              <Typography
                className={classes.acterTypeName}
                variant="body2"
                gutterBottom
              >
                {post.Acter.name}
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption" className={classes.description}>
                <Markdown>{post.content}</Markdown>
              </Typography>
            </Box>
          </Box>
          <Box>
            <DropdownMenu anchorNode={<ThreeDotsIcon />} closeOnClick>
              <MenuItem onClick={onEdit}>Edit</MenuItem>
            </DropdownMenu>
          </Box>
        </Box>
      )}
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    postItems: {
      display: 'flex',
      flexDirection: 'row',
      padding: 5,
    },
    postContainer: {
      backgroundColor: 'white',
      borderRadius: 7,
      width: '100%',
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    commentContainer: {
      backgroundColor: grey[200],
      borderRadius: 7,
      width: '80%',
      marginLeft: 14,
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    acterTypeName: {
      color: grey[700],
      fontWeight: theme.typography.fontWeightLight,
      fontSize: 11,
      textTransform: 'capitalize',
    },
    title: {
      color: grey[700],
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: 11,
      marginBottom: 0,
      lineHeight: 1,
    },
    description: {
      color: grey[700],
      fontSize: 13,
      hyphens: 'auto',
      overflow: 'hidden',
    },
  })
)
