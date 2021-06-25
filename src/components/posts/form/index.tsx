import React, { FC, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { Field, Form, Formik, useFormikContext } from 'formik'
import { Button } from 'src/components/styled'
import clsx from 'clsx'
import { TextEditor } from 'src/components/util/text-editor'
import { ActerAvatar } from 'src/components/acter/avatar'
import { User, Post as PostType } from '@schema'
import { grey } from '@material-ui/core/colors'
import { Size } from 'src/constants'

export interface PostFormProps {
  user: User
  comment?: boolean
  post?: PostType
  onPostSubmit: (values: { content: string; parentId: string }) => Promise<void>
}

export const PostForm: FC<PostFormProps> = ({ user, post, onPostSubmit }) => {
  const classes = useStyles()

  const initialValues = {
    content: '',
    parentId: null,
  }

  const [editorFocus, setEditorFocus] = useState(null)
  const [clearText, setClearText] = useState(false)

  const handleSubmit = (values, formikBag) => {
    const submitValues = post ? { ...values, parentId: post.id } : values
    onPostSubmit(submitValues)
    formikBag.resetForm()
    setClearText(true)
  }

  const handleFocus = (editorRef) => {
    setEditorFocus(editorRef)
    setClearText(false)
  }

  return (
    <Box
      className={clsx(
        classes.root
        // post && classes.contentContainerComment
      )}
    >
      <ActerAvatar acter={user.Acter} size={post ? 4 : 6} />
      {/* <Box style={{ marginTop: post ? 8 : 15 }}>
        <ActerAvatar acter={user.Acter} size={post ? 4 : 6} />
      </Box> */}
      {/* <Box
        className={classes.formContainer}
        // style={{ width: '100%' }}
      > */}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ setFieldValue, values }) => (
          <Form className={clsx(classes.form, post && classes.comment)}>
            {/* <Box onClick={() => editorFocus.focus()}> */}
            {post ? (
              <Field
                name="content"
                placeholder="Comment..."
                className={classes.field}
              />
            ) : (
              <TextEditor
                height={25}
                borderStyles={{ radius: 8 }}
                toolbarSize={Size.SMALL}
                initialValue={initialValues.content}
                hideEditorToolbar={true}
                handleInputChange={(value) => setFieldValue('content', value)}
                handleFocus={handleFocus}
                clearTextEditor={clearText}
                placeholder="Write a post..."
              />
            )}
            {/* </Box> */}
            <Box
              className={clsx(
                classes.buttonContainer,
                values.content === '' && classes.hideButton
              )}
            >
              <Button
                size="small"
                variant={post ? 'outlined' : 'contained'}
                color="primary"
                type="submit"
                style={{ color: post ? null : '#FFFFFF' }}
              >
                {post ? 'Comment' : 'Post'}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
    // </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'white',
      borderRadius: 7,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        width: 300,
      },
      marginBottom: theme.spacing(2),
    },
    // postInput: {
    //   marginLeft: theme.spacing(2),
    //   marginTop: 2,
    //   '& input': {
    //     height: 46,
    //     borderColor: grey[400],
    //     border: '1.1px solid',
    //     borderRadius: 8,
    //     paddingLeft: 20,
    //     fontFamily: theme.typography.fontFamily,
    //   },
    // },
    comment: {
      marginLeft: 5,
    },
    // formContainer: {
    //   borderRadius: 10,
    //   width: '100%',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'flex-start',
    // },
    form: {
      marginTop: 3,
      marginLeft: 10,
      paddingRight: 10,
      // display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'hidden',
      fontSize: 11,
    },
    field: {
      padding: theme.spacing(1),
      width: '100%',
      backgroundColor: grey[200],
      borderColor: grey[200],
      borderRadius: 7,
      border: 'none',
      outline: 'none',
    },
    formInputLabel: {
      marginBottom: 3,
      fontSize: 13,
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
