import React, { FC } from 'react'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'

import { createStyles, makeStyles, IconButton, Theme } from '@material-ui/core'
import { Save, Edit, Delete } from '@material-ui/icons'

export interface LinkFormProps {
  onSubmit: (values: any) => void
  data?: any
}

export const LinkForm: FC<LinkFormProps> = ({ onSubmit, data }) => {
  const classes = useStyles()
  const initialValues = {
    name: data?.name || '',
    url: data?.url || '',
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
            {dirty || !data ? <Save /> : <Edit />}
          </IconButton>

          {data && (
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
