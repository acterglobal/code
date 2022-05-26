import React, { FC, useEffect, useRef } from 'react'

import { makeStyles, createStyles, useTheme } from '@material-ui/core'

import { Form, Formik, FormikBag } from 'formik'

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

  const placeholder = parentId
    ? `${capitalize(t('comment'))} ...`
    : t('form.writePost')

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ setFieldValue }) => (
        <Form className={classes.form}>
          <TextEditor
            initialValue={initialValues.content}
            handleInputChange={(value) => setFieldValue('content', value)}
            placeholder={placeholder}
            isComment={!!parentId}
            hideEditorToolbar={!!parentId}
            height={theme.spacing(parentId ? 4.5 : 12)}
            borderStyles={{
              radius: theme.spacing(1),
              color: parentId
                ? theme.colors.grey.extraLight
                : theme.colors.grey.main,
              border: !!parentId && 'none',
            }}
          />

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

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      paddingRight: 2,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      fontSize: 11,
    },
  })
)
