import React, { FC } from 'react'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Box, IconButton } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { Link } from '@schema'

export interface LinkFormProps {
  link?: Link
  onLinkSubmit: (values: Link) => Promise<void>
  onLinkUpdate?: (values: Link) => Promise<void>
  onLinkDelete?: (values: Link) => Promise<void>
}

export const LinkForm: FC<LinkFormProps> = ({
  link,
  onLinkSubmit,
  onLinkUpdate,
  onLinkDelete,
}) => {
  const classes = useStyles()
  const initialValues = {
    id: link?.id || null,
    name: link?.name || '',
    url: link?.url || '',
  }

  const handleSubmit = (values, formikbag) => {
    link ? onLinkUpdate(values) : onLinkSubmit(values)
    formikbag.resetForm()
  }

  const onDelete = () => {
    onLinkDelete(link)
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
