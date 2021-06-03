import React, { FC, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Box, InputLabel } from '@material-ui/core'
import { Form, Formik } from 'formik'
import { Button } from 'src/components/styled'
import clsx from 'clsx'
import { TextEditor } from 'src/components/util/text-editor'
import { ActerAvatar } from 'src/components/acter/avatar'
import { User, Post } from '@schema'

export interface PostFormProps {
  user: User
  comment?: boolean
  post?: Post
  onPostSubmit: (values: unknown) => Promise<void>
}

export const PostForm: FC<PostFormProps> = ({ user, post, onPostSubmit }) => {
  const classes = useStyles()

  const initialValues = {
    content: '',
    parentId: null,
  }

  const [editorFocus, setEditorFocus] = useState(null)
  const [clearText, setClearText] = useState(false)

  const handleSubmit = (values) => {
    const submitValues = post ? { ...values, parentId: post.id } : values
    onPostSubmit(submitValues)
    setClearText(true)
  }

  const handleFocus = (editorRef) => {
    setEditorFocus(editorRef)
    setClearText(false)
  }

  return (
    <Box
      className={clsx(
        classes.contentContainer,
        post && classes.contentContainerComment
      )}
    >
      <Box style={{ marginTop: post ? 8 : 15 }}>
        <ActerAvatar acter={user.Acter} size={post ? 4 : 6} />
      </Box>

      <Box className={classes.commentInputContainer}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ setFieldValue }) => (
            <Form
              className={clsx(
                classes.formContainer,
                post && classes.contentContainerComment
              )}
            >
              <Box mb={1} onClick={() => editorFocus.focus()}>
                <InputLabel className={classes.formInputLabel}>
                  {post ? 'Leave a comment' : 'Share your thoughts'}
                </InputLabel>
                <TextEditor
                  width={535}
                  height={120}
                  initialValue={initialValues.content}
                  // @ts-ignore
                  handleInputChange={(value) => setFieldValue('content', value)}
                  handleFocus={handleFocus}
                  clearTextEditor={clearText}
                />
              </Box>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                type="submit"
                // onClick={() => setClearText(true)}
              >
                {post ? 'Add Comment' : 'Post'}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentContainer: {
      backgroundColor: 'white',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      padding: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        width: 300,
      },
      marginBottom: theme.spacing(2),
    },
    contentContainerComment: {
      marginLeft: 5,
    },
    commentInputContainer: {
      borderRadius: 7,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'hidden',
      padding: theme.spacing(1),
      fontSize: 11,
    },
    formInputLabel: {
      marginBottom: 3,
      fontSize: 13,
    },
  })
)
