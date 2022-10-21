import React, { FC, useState } from 'react'

import { Box } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import clsx from 'clsx'

import { ActerAvatar } from '@acter/components/acter/avatar'
import {
  PostForm,
  PostFormProps,
  PostFormValues,
} from '@acter/components/posts/form'
import { getFollowersByType } from '@acter/lib/acter/get-followers-by-type'
import { useActer } from '@acter/lib/acter/use-acter'
import { MemberType } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useCreateComment } from '@acter/lib/post/use-create-comment'
import { useCreatePost } from '@acter/lib/post/use-create-post'
import { capitalize } from '@acter/lib/string/capitalize'
import { PostMention, User } from '@acter/schema'
import { Post as PostType } from '@acter/schema'

const { PEOPLE } = MemberType

export interface PostFormSectionProps
  extends Omit<PostFormProps, 'onPostSubmit'> {
  user: User
  post?: PostType
  parentId?: string
  acterId?: string
}

export const PostFormSection: FC<PostFormSectionProps> = ({
  user,
  post,
  parentId,
  acterId,
}) => {
  const { t } = useTranslation('common')
  const classes = useStyles()
  const [showForm, setShowForm] = useState(false)
  const { acter } = useActer({ acterId })
  const [createOnePost] = useCreatePost(acter)
  const [createComment] = useCreateComment(acter)

  if (!acter) return null

  const handleClick = () => setShowForm(!showForm)

  const createFn = parentId ? createComment : createOnePost

  const handlePostSubmit = (data: PostFormValues, mentions: PostMention[]) => {
    setShowForm(false)
    createFn(data, mentions)
  }

  const validFollowers = getFollowersByType(acter, PEOPLE)

  return (
    <Box className={clsx(classes.container, parentId && classes.comment)}>
      <ActerAvatar acter={user.Acter} size={parentId ? 4 : 6} />

      <Box className={clsx(classes.form, parentId && classes.commentForm)}>
        {!showForm ? (
          <Box
            onClick={handleClick}
            className={clsx(classes.field, parentId && classes.commentField)}
          >
            {parentId ? `${capitalize(t('comment'))} ...` : t('form.writePost')}
          </Box>
        ) : (
          <PostForm
            parentId={parentId}
            post={post}
            onPostSubmit={handlePostSubmit}
            onCancel={handleClick}
            followers={validFollowers}
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
      overflowX: 'auto',
      [theme.breakpoints.down('xs')]: {
        width: 300,
      },
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
      padding: theme.spacing(1),
      paddingTop: theme.spacing(1.3),
      backgroundColor: theme.colors.grey.extraLight,
      color: theme.palette.secondary.main,
    },
  })
)
