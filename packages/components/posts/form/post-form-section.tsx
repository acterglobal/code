import React, { FC, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { ActerAvatar } from '@acter/components/acter/avatar'
import { User } from '@acter/schema'
import {
  PostForm,
  PostFormProps,
  PostFormValues,
} from '@acter/components/posts/form'
import { Post as PostType } from '@acter/schema'
import clsx from 'clsx'

export interface PostFormSectionProps extends PostFormProps {
  user: User
  post?: PostType
  parentId?: string
}

export const PostFormSection: FC<PostFormSectionProps> = ({
  user,
  post,
  parentId,
  onPostSubmit,
}) => {
  const classes = useStyles()
  const [showForm, setShowForm] = useState(false)

  const handleClick = () => setShowForm(!showForm)

  const handlePostSubmit = (data: PostFormValues) => {
    setShowForm(false)
    onPostSubmit(data)
  }

  return (
    <Box className={clsx(classes.container, parentId && classes.comment)}>
      <ActerAvatar acter={user.Acter} size={parentId ? 4 : 6} />

      <Box className={clsx(classes.form, parentId && classes.commentForm)}>
        {!showForm ? (
          <Box
            onClick={handleClick}
            className={clsx(classes.field, parentId && classes.commentField)}
          >
            {parentId ? 'Comment...' : 'Write post...'}
          </Box>
        ) : (
          <PostForm
            parentId={parentId}
            post={post}
            onPostSubmit={handlePostSubmit}
            onCancel={handleClick}
          />
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
      borderColor: theme.colors.grey.main,
      borderRadius: theme.spacing(1),
      border: '1px solid',
      outline: 'none',
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: 11,
      color: theme.colors.grey.main,
    },
    commentField: {
      border: 'none',
      height: theme.spacing(4.5),
      padding: theme.spacing(1.3),
      paddingLeft: theme.spacing(1.5),
      backgroundColor: theme.colors.grey.extraLight,
      color: theme.palette.secondary.main,
    },
  })
)
