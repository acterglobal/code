import React, { FC } from 'react'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { createStyles, makeStyles, IconButton } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { Link } from '@schema'

export interface LinkFormProps {
  link?: Link
  onLinkSubmit: (values: unknown) => Promise<void>
  onLinkDelete?: (values: unknown) => Promise<void>
}

export const LinkForm: FC<LinkFormProps> = ({
  link,
  onLinkSubmit,
  onLinkDelete,
}) => {
  const classes = useStyles()
  const initialValues = {
    id: link?.id || null,
    name: link?.name || '',
    url: link?.url || '',
  }

  const onDelete = () => {
    const { id } = link
    onLinkDelete(id)
  }
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={(values, { resetForm }) => {
        resetForm()
        onLinkSubmit(values)
      }}
    >
      {({ dirty }) => (
        <Form>
          <Field
            name="name"
            required
            className={classes.formInput}
            component={TextField}
            size="small"
            variant="outlined"
            margin="dense"
            placeholder="Enter your link's name"
            InputProps={{
              className: classes.input,
            }}
          />
          <Field
            name="url"
            required
            className={classes.formInput}
            component={TextField}
            size="small"
            variant="outlined"
            margin="dense"
            placeholder="Enter your URL"
            InputProps={{
              className: classes.input,
            }}
          />

          <IconButton className={classes.icons} type="submit">
            {dirty || !link ? <CheckCircleIcon /> : <Edit />}
          </IconButton>

          {link && (
            <IconButton className={classes.icons} onClick={onDelete}>
              <Delete />
            </IconButton>
          )}
        </Form>
      )}
    </Formik>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    formInput: {
      margin: 10,
      borderRadius: 4,
      width: 300,
      padding: 10,
    },
    input: {
      backgroundColor: 'white',
      fontSize: 12,
    },
    icons: {
      marginTop: 10,
    },
  })
)
