import React, { FC, useEffect, useRef, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { Field, Form, Formik, FormikBag } from 'formik'
import { Button } from 'src/components/styled'
import clsx from 'clsx'
import { TextEditor } from 'src/components/util/text-editor'
import { Post as PostType } from '@schema'
import { grey } from '@material-ui/core/colors'
import { Size } from 'src/constants'

export type PostFormValues = PostType & {
  postId: string
  content: string
  parentId: string | null
}

export interface PostFormProps {
  comment?: boolean
  parentPost?: PostType
  post?: PostType
  onPostSubmit?: (values: PostFormValues) => Promise<void>
  onPostUpdate?: (values: PostFormValues) => void
  onFormCancel: () => void
}

export const PostForm: FC<PostFormProps> = ({
  user,
  parentPost,
  post,
  onPostSubmit,
  onPostUpdate,
  onFormCancel,
}) => {
  const classes = useStyles()

  const initialValues: Post = {
    content: post ? post.content : '',
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
    values,
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
  const onCancel = () => {
    onFormCancel()
  }

  const handleFocus = (editorRef) => {
    setEditorFocus(editorRef)
    setClearText(false)
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
