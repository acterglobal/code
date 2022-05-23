import React, { FC, useEffect, useRef } from 'react'

import {
  makeStyles,
  createStyles,
  Theme,
  TextareaAutosize,
  useTheme,
} from '@material-ui/core'

import { Field, Form, Formik, FormikBag } from 'formik'

import { FormButtons } from '@acter/components/util/forms/form-buttons'
import { TextEditor } from '@acter/components/util/text-editor'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { capitalize } from '@acter/lib/string/capitalize'
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
  const { t } = useTranslation('common')

  const initialValues: PostType = {
    content: post?.content || '',
    parentId: null,
    ...post,
  }
  const inputRef = useRef<HTMLInputElement>(null)
  const theme = useTheme()

  useEffect(() => {
    inputRef.current?.focus()
  }, [inputRef])

  const handleSubmit = (
    values: PostFormValues,
    formikBag: FormikBag<PostFormProps, PostType>
  ) => {
    if (post) {
      onPostUpdate(values)
      formikBag.resetForm()
    } else {
      const submitValues = parentId ? { ...values, parentId: parentId } : values
      onPostSubmit(submitValues)
      formikBag.resetForm()
    }
    formikBag.resetForm()
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
              placeholder={`${capitalize(t('comment'))} ...`}
              className={classes.field}
              innerRef={inputRef}
              autoFocus={true}
              as={TextareaAutosize}
            />
          ) : (
            <TextEditor
              initialValue={initialValues.content}
              handleInputChange={(value) => setFieldValue('content', value)}
              placeholder={t('form.writePost')}
              height={theme.spacing(12)}
              borderStyles={{
                radius: theme.spacing(1),
                color: theme.colors.grey.main,
              }}
            />
          )}

          {post ? (
            <FormButtons align="right" onCancel={onCancel} />
          ) : (
            <FormButtons
              align="right"
              onCancel={onCancel}
              saveText={parentId ? 'comment' : 'post'}
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
