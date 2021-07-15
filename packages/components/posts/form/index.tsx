import React, { FC, useEffect, useRef, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { Field, Form, Formik, FormikBag } from 'formik'
import { Button } from '@acter/components/styled'
import clsx from 'clsx'
import { TextEditor } from '@acter/components/util/text-editor'
import { Post as PostType, User } from '@acter/schema/types'
import { grey } from '@material-ui/core/colors'
import { Size } from '@acter/lib/constants'

export type PostFormValues = PostType & {
  postId: string
  content: string
  parentId: string | null
}

export interface PostFormProps {
  parentPost?: PostType
  post?: PostType
  user?: User
  onPostSubmit?: (values: PostFormValues) => void
  onPostUpdate?: (values: PostFormValues) => void
  onCancel?: () => void
}

export const PostForm: FC<PostFormProps> = ({
  parentPost,
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
      const submitValues = parentPost
        ? { ...values, parentId: parentPost.id }
        : values
      onPostSubmit(submitValues)
    }
    formikBag.resetForm()
    setClearText(true)
  }

  const handleEditorRef = (editorRef) => {
    setEditor(editorRef)
    setClearText(false)
  }

  const handleCancel = () => {
    onCancel()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ setFieldValue, values }) => (
        <Form className={classes.form}>
          {parentPost ? (
            <Field
              name="content"
              placeholder="Comment..."
              className={classes.field}
              innerRef={inputRef}
            />
          ) : (
            <TextEditor
              height={25}
              borderStyles={{ radius: 8, color: grey[500] }}
              toolbarSize={Size.SMALL}
              initialValue={initialValues.content}
              handleInputChange={(value) => setFieldValue('content', value)}
              clearTextEditor={clearText}
              placeholder="Write a post..."
              editorRef={handleEditorRef}
            />
          )}
          <Box
            className={clsx(
              classes.buttonContainer,
              values.content === '' && classes.hideButton
            )}
          >
            <Button
              size="small"
              variant={parentPost ? 'outlined' : 'contained'}
              color="primary"
              type="submit"
              style={{ color: parentPost ? null : '#FFFFFF' }}
            >
              {parentPost ? 'Comment' : 'Post'}
            </Button>
          </Box>
          {post && (
            <Box className={classes.buttonContainer}>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Box>
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
      padding: theme.spacing(1.5),
      width: '100%',
      height: theme.spacing(4.5),
      backgroundColor: grey[200],
      borderColor: grey[200],
      borderRadius: theme.spacing(1),
      border: 'none',
      outline: 'none',
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: 11,
    },
    buttonContainer: {
      marginTop: theme.spacing(1),
      display: 'flex',
      justifyContent: 'flex-end',
      color: 'white',
    },
    hideButton: {
      display: 'none',
    },
  })
)
