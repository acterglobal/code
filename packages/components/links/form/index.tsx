import React, { FC } from 'react'

import { Box, IconButton } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Delete } from '@material-ui/icons'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

import { Formik, Form, Field, FormikBag } from 'formik'
import { TextField } from 'formik-material-ui'

import { useActer } from '@acter/lib/acter/use-acter'
import { useCreateLink } from '@acter/lib/links/use-create-link'
import { useDeleteLink } from '@acter/lib/links/use-delete-link'
import { useUpdateLink } from '@acter/lib/links/use-update-link'
import { Link } from '@acter/schema'

export type LinkFormValues = Link & {
  id: string | null
  name: string
  url: string
}

export interface LinkFormProps {
  link?: Link
}

export const LinkForm: FC<LinkFormProps> = ({ link }) => {
  const classes = useStyles()
  const initialValues: LinkFormValues = {
    id: link?.id || null,
    name: link?.name || '',
    url: link?.url || '',
    ...link,
  }

  const { acter } = useActer()

  const [createLink] = useCreateLink(acter)
  const [updateLink] = useUpdateLink(acter)
  const [deleteLink] = useDeleteLink()

  const handleSubmit = (
    values: LinkFormValues,
    formikbag: FormikBag<LinkFormProps, Link>
  ) => {
    link ? updateLink(values) : createLink(values)
    formikbag.resetForm()
  }

  const onDelete = () => {
    deleteLink(link)
  }

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      {({ dirty }) => (
        <Form>
          <Box className={classes.root}>
            <Box className={classes.inputContainer}>
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
            </Box>

            <Box className={classes.iconsContainer}>
              {dirty && (
                <IconButton type="submit">
                  <CheckCircleIcon />
                </IconButton>
              )}

              {link && (
                <IconButton onClick={onDelete}>
                  <Delete />
                </IconButton>
              )}
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: 5,
      [theme.breakpoints.down(1322)]: {
        width: 'fit-content',
      },
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 0,
    },
    formInput: {
      margin: 10,
      borderRadius: 4,
      width: 300,
    },
    input: {
      backgroundColor: 'white',
      fontSize: 12,
    },
    iconsContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
  })
)
