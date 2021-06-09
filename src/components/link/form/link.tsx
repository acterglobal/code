import React, { FC } from 'react'
import { Formik, Form, Field } from 'formik'
import {
  Box,
  createStyles,
  makeStyles,
  IconButton,
  Theme,
} from '@material-ui/core'
import { Save } from '@material-ui/icons'

export interface LinkFormProps {
  onSubmit: (values: any) => void
}

export const LinkForm: FC<LinkFormProps> = ({ onSubmit }) => {
  const classes = useStyles()
  const initialValues = {
    linkName: '',
    link: '',
  }
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <Field name="linkName" required className={classes.formInput} />
          <Field name="link" required className={classes.formInput} />

          <IconButton type="submit">
            <Save />
          </IconButton>
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
    },
  })
)
