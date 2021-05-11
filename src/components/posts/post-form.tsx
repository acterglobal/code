import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { Form, Formik, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { Button } from 'src/components/styled'
import Image from 'next/image'
import { getImageUrl } from 'src/lib/images/get-image-url'
import { User } from '@schema'

export interface PostFormProps {
  user: User
  comment?: boolean
  onSubmit: (values: unknown, submitProps: unknown) => void
}

export const PostForm: FC<PostFormProps> = ({ user, comment, onSubmit }) => {
  const classes = useStyles()

  const initialValues = {
    commentInput: '',
  }

  return (
    <Box className={classes.contentContainer}>
      <Box className={classes.image}>
        <Image
          src={getImageUrl(user.Acter.avatarUrl, 'avatar')}
          alt={user.name}
          layout="responsive"
          width="50"
          height="50"
        />
      </Box>
      <Box className={classes.commentInputContainer}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          enableReinitialize
        >
          <Form className={classes.formContainer}>
            <Field
              component={TextField}
              {...(comment
                ? { label: 'Share your comment' }
                : { label: 'Share your thoughts' })}
              name="commentField"
              variant="outlined"
              multiline
              rows={1}
              className={classes.commentField}
            />
            <Button
              size="small"
              variant="outlined"
              color="primary"
              type="submit"
            >
              {comment ? 'Add Comment' : 'Post'}
            </Button>
          </Form>
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
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      padding: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        width: 300,
      },
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
