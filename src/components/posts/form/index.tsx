import React, { FC, useState, useEffect } from 'react'
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

export const PostForm: FC<PostFormProps> = ({
  user,
  comment,
  post,
  onPostSubmit,
}) => {
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
    } catch (_e) {
      // Error notification handled up the stack
    }
  }
  return (
    <Box className={classes.contentContainer}>
      <ActerAvatar acter={user.Acter} size={6} />
      <Box className={classes.commentInputContainer}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ setFieldValue }) => (
            <Form className={classes.formContainer}>
              <Box mb={1} onClick={() => editorFocus.focus()}>
                <InputLabel style={{ marginBottom: 5 }}>
                  Share your thoughts
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
                {comment ? 'Add Comment' : 'Post'}
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
    root: {
      background: 'white',
      width: 800,
      overflow: 'hidden',
      '& .MuiFilledInput-inputMultiline': {
        overflow: 'hidden',
      },
    },
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
    image: {
      marginTop: theme.spacing(3),
      objectFit: 'cover',
      border: '1px solid black',
      width: 30,
      height: 30,
      padding: theme.spacing(0.8),
      borderRadius: '50%',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    commentInputContainer: {
      borderRadius: 7,
      width: 700,
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '93%',
      overflow: 'hidden',
      margin: theme.spacing(1),
    },
    commentField: {
      margin: theme.spacing(1),
    },
  })
)
