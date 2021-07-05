import React, { FC, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { ActerAvatar } from 'src/components/acter/avatar'
import { User } from '@schema'
import { grey } from '@material-ui/core/colors'
import {
  PostForm,
  PostFormProps,
  PostFormValues,
} from 'src/components/posts/form'
import { Post as PostType } from '@schema'
import clsx from 'clsx'

export interface PostFormSectionProps extends PostFormProps {
  user: User
  post?: PostType
}

export const PostFormSection: FC<PostFormSectionProps> = ({
  user,
  post,
  onPostSubmit,
}) => {
  const classes = useStyles()
  const [showForm, setShowForm] = useState(false)

  const handleClick = () => setShowForm(true)

  const handlePostSubmit = (data: PostFormValues) => {
    setShowForm(false)
    onPostSubmit(data)
  }

  return (
    <Box className={clsx(classes.container, post && classes.comment)}>
      <ActerAvatar acter={user.Acter} size={post ? 4 : 6} />

      <Box className={clsx(classes.form, post && classes.commentForm)}>
        {!showForm ? (
          <Box
            onClick={handleClick}
            className={clsx(classes.field, post && classes.commentField)}
          >
            {post ? 'Comment...' : 'Write post...'}
          </Box>
        ) : (
          <PostForm post={post} onPostSubmit={handlePostSubmit} />
        )}
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: 'white',
      width: '100%',
      borderRadius: theme.spacing(1),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        width: 300,
      },
      marginBottom: theme.spacing(2),
    },
    comment: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    form: {
      marginTop: theme.spacing(0.5),
      marginLeft: theme.spacing(1.2),
      width: '100%',
    },
    commentForm: {
      marginTop: 0,
      marginLeft: theme.spacing(0.6),
    },
    field: {
      padding: theme.spacing(1.5),
      width: '100%',
      height: 40,
      borderColor: grey[500],
      borderRadius: theme.spacing(1),
      border: '1px solid',
      outline: 'none',
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: 11,
      color: grey[500],
    },
    commentField: {
      border: 'none',
      height: theme.spacing(4.5),
      padding: theme.spacing(1.3),
      paddingLeft: theme.spacing(1.5),
      backgroundColor: grey[200],
      color: grey[600],
    },
  })
)
