import React, { FC, useEffect, useRef, useState } from 'react'

import { Theme, TextareaAutosize, useTheme } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

import { Field, Form, Formik, FormikBag } from 'formik'

import { FormButtons } from '@acter/components/util/forms/form-buttons'
import { TextEditor } from '@acter/components/util/text-editor'
import { Size } from '@acter/lib/constants'
import { Post as PostType, User } from '@acter/schema'

export type PostFormValues = PostType & {
  content: string
  parentId: string | null
}

export interface PostFormProps {
  parentId?: string
  post?: PostType
  user?: User
  onPostSubmit?: (values: PostFormValues) => void
  onPostUpdate?: (values: PostFormValues) => void
  cancelEdit?: () => void
  onCancel?: () => void
}

export const PostForm: FC<PostFormProps> = ({
  parentId,
  post,
  onPostSubmit,
  onPostUpdate,
  onCancel,
}) => {
  const classes = useStyles()

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

  const handleSubmit = (
    values: PostFormValues,
    formikBag: FormikBag<PostFormProps, PostType>
  ) => {
    if (post) {
      onPostUpdate(values)
    } else {
      const submitValues = parentId ? { ...values, parentId: parentId } : values
      onPostSubmit(submitValues)
    }
    formikBag.resetForm()
    setClearText(true)
  }

  const handleEditorRef = (editorRef) => {
    setEditor(editorRef)
    setClearText(false)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ setFieldValue }) => (
        <Form className={classes.form}>
          {parentId ? (
            <Field
              name="content"
              placeholder="Comment..."
              className={classes.field}
              innerRef={inputRef}
              autoFocus={true}
              as={TextareaAutosize}
            />
          ) : (
            <TextEditor
              height={theme.spacing(1)}
              borderStyles={{
                radius: theme.spacing(1),
                color: theme.colors.grey.main,
              }}
              toolbarSize={Size.SMALL}
              initialValue={initialValues.content}
              handleInputChange={(value) => setFieldValue('content', value)}
              clearTextEditor={clearText}
              placeholder="Write a post..."
              editorRef={handleEditorRef}
            />
          )}

          {post ? (
            <FormButtons align="right" onCancel={onCancel} />
          ) : (
            <FormButtons
              align="right"
              onCancel={onCancel}
              saveText={parentId ? 'Comment' : 'Post'}
            />
          )}
        </Form>
      )}
    </Formik>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      paddingRight: 2,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'hidden',
      fontSize: 11,
    },
    field: {
      padding: theme.spacing(1),
      width: '100%',
      height: theme.spacing(4.5),
      backgroundColor: theme.colors.grey.extraLight,
      borderColor: theme.colors.grey.extraLight,
      borderRadius: theme.spacing(1),
      border: 'none',
      outline: 'none',
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: 11,
      lineHeight: '1.2rem',
      resize: 'none',
    },
  })
)
