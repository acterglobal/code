import React, { FC } from 'react'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { createStyles, makeStyles, IconButton, Theme } from '@material-ui/core'
import { Save, Edit, Delete } from '@material-ui/icons'
import { Acter, ActerConnectionRole, ActerType, User, Link } from '@schema'

export interface LinkFormProps {
  link?: Link
  onSubmit?: (values: any) => void
}

export const LinkForm: FC<LinkFormProps> = ({ link, onSubmit }) => {
  const classes = useStyles()
  const initialValues = {
    name: link?.name || '',
    url: link?.url || '',
  }

  const handleDelete = (id) => {
    // Delete callback
  }
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={onSubmit}
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
            {dirty || !link ? <Save /> : <Edit />}
          </IconButton>

          {link && (
            <IconButton className={classes.icons} onClick={handleDelete}>
              <Delete />
            </IconButton>
          )}
        </Form>
      )}
    </Formik>
  )
}

const useStyles = makeStyles((theme: Theme) =>
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
