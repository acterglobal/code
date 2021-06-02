import React, { FC, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Box, InputLabel } from '@material-ui/core'
import { Form, Formik } from 'formik'
import { Button } from 'src/components/styled'
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

  const [editorFocus, setEditorFocus] = useState(null)

  const initialValues = {
    content: '',
    parentId: null,
  }

  const handleSubmit = async (values) => {
    const submitValues = post ? { ...values, parentId: post.id } : values

    try {
      await onPostSubmit(submitValues)
      // eslint-disable-next-line no-empty
    } catch (_e) {}
  }
  return (
    <Box className={classes.contentContainer}>
      <ActerAvatar acter={user.Acter} size={post ? 4 : 6} />
      <Box className={classes.commentInputContainer}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ setFieldValue }) => (
            <Form className={classes.formContainer}>
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
                  handleFocus={(editorRef) => setEditorFocus(editorRef)}
                />
              </Box>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                type="submit"
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
    commentInputContainer: {
      borderRadius: 7,
      width: '100%',
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'hidden',
      margin: theme.spacing(1),
      fontSize: 11,
    },
    formInputLabel: {
      marginBottom: 3,
      fontSize: 13,
    },
  })
)
