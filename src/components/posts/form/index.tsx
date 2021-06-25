import React, { FC, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
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

  const [clearText, setClearText] = useState(false)

  const handleSubmit = (values, formikBag) => {
    const submitValues = post ? { ...values, parentId: post.id } : values
    onPostSubmit(submitValues)
    formikBag.resetForm()
    setClearText(true)
  }

  const handleFocus = () => {
    setClearText(false)
  }

  return (
    <Box className={classes.root}>
      <ActerAvatar acter={user.Acter} size={post ? 4 : 6} />

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ setFieldValue, values }) => (
          <Form className={clsx(classes.form, post && classes.comment)}>
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
    form: {
      marginTop: 3,
      marginLeft: 10,
      paddingRight: 10,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'hidden',
      fontSize: 11,
    },
    comment: {
      marginLeft: 5,
      marginTop: 0,
    },
    field: {
      padding: theme.spacing(1),
      width: '100%',
      height: 35,
      backgroundColor: grey[200],
      borderColor: grey[200],
      borderRadius: 6,
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
