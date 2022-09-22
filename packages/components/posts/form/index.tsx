import React, { Component, FC, useEffect, useRef, useState } from 'react'

import { makeStyles, createStyles, useTheme, Box } from '@material-ui/core'

import clsx from 'clsx'
import { Form, Formik, FormikBag } from 'formik'

import { FormButtons } from '@acter/components/util/forms/form-buttons'
import { TextEditor } from '@acter/components/util/text-editor'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { capitalize } from '@acter/lib/string/capitalize'
import {
  ActerConnection,
  Post as PostType,
  PostMention,
  User,
} from '@acter/schema'

export type PostFormValues = PostType & {
  mentions: PostMention[]
  content: string
  parentId: string | null
}

export interface PostFormProps {
  parentId?: string
  post?: PostType
  user?: User
  followers: ActerConnection[]
  onPostSubmit?: (values: PostFormValues, mentions: PostMention[]) => void
  onPostUpdate?: (values: PostFormValues) => void
  cancelEdit?: () => void
  onCancel?: () => void
}

export const PostForm: FC<PostFormProps> = ({
  parentId,
  post,
  followers,
  onPostSubmit,
  onPostUpdate,
  onCancel,
}) => {
  const classes = useStyles()
  const { t } = useTranslation('common')
  const [mentions, setMentions] = useState<PostMention[]>(
    post?.PostMentions && (post?.PostMentions as PostMention[])
  )

  const initialValues: PostType = {
    content: post?.content || '',
    parentId: null,
    ...post,
  }
  const [editor, setEditor] = useState(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [clearText, setClearText] = useState(false)
  const theme = useTheme()

  editor?.focus()
  useEffect(() => {
    inputRef.current?.focus()
  }, [inputRef])

  const handleMentions = (newMentions: PostMention[]) => {
    setMentions(newMentions)
  }

  const handleSubmit = (
    values: PostFormValues,
    formikBag: FormikBag<PostFormProps, PostType>
  ) => {
    if (post) {
      onPostUpdate(values)
      formikBag.resetForm()
    } else {
      const submitValues = parentId ? { ...values, parentId: parentId } : values
      onPostSubmit(submitValues, mentions)
      formikBag.resetForm()
    }
    formikBag.resetForm()
  }

  const handleEditorRef = (editorRef: Component) => {
    setEditor(editorRef)
    setClearText(false)
  }

  const placeholder = parentId
    ? `${capitalize(t('comment'))} ...`
    : t('form.writePost')

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ setFieldValue }) => (
        <Form className={classes.form}>
          <Box
            className={classes.editorContainer}
            onClick={() => {
              handleEditorRef
            }}
          >
            <TextEditor
              initialValue={initialValues.content}
              currentMentions={mentions}
              handleInputChange={(value) => setFieldValue('content', value)}
              editorRef={editor}
              handleEditorRef={handleEditorRef}
              placeholder={clearText && placeholder}
              handleMentions={handleMentions}
              isComment={!!parentId}
              hideEditorToolbar={!!parentId}
              height={theme.spacing(parentId ? 4.5 : 12)}
              borderStyles={{
                radius: theme.spacing(1),
                color: parentId
                  ? theme.colors.grey.extraLight
                  : theme.colors.grey.main,
                border: !!parentId && 'none',
              }}
              followers={followers}
            />
          </Box>

          {post ? (
            <Box className={clsx(parentId && classes.buttons)}>
              <FormButtons align="right" onCancel={onCancel} />
            </Box>
          ) : (
            <Box className={clsx(parentId && classes.buttons)}>
              <FormButtons
                align="right"
                onCancel={onCancel}
                saveText={parentId ? 'comment' : 'post'}
              />
            </Box>
          )}
        </Form>
      )}
    </Formik>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      paddingRight: 2,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      fontSize: 11,
    },
    editorContainer: {
      minHeight: 100,
    },
    buttons: {
      marginTop: 8,
    },
  })
)
