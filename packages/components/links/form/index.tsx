import React, { FC } from 'react'

import { Box, IconButton } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Delete } from '@material-ui/icons'
import { Cancel as CancelIcon } from '@material-ui/icons'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

import clsx from 'clsx'
import { Formik, Form, Field, FormikBag } from 'formik'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { useTranslation } from '@acter/lib/i18n/use-translation'
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
  handleCancel?: () => void
}

export const LinkForm: FC<LinkFormProps> = ({ link, handleCancel }) => {
  const { t } = useTranslation('settings')
  const classes = useStyles()
  const initialValues: LinkFormValues = {
    id: link?.id || null,
    name: link?.name || '',
    url: link?.url || '',
    ...link,
  }

  const { acter } = useActer()

  const [{ fetching: creating }, createLink] = useCreateLink(acter, {
    onCompleted: handleCancel,
  })
  const [{ fetching: updating }, updateLink] = useUpdateLink(acter)
  const [{ fetching: deleting }, deleteLink] = useDeleteLink()

  const handleSubmit = (
    values: LinkFormValues,
    formikbag: FormikBag<LinkFormProps, Link>
  ) => {
    link ? updateLink(values) : createLink(values)
    formikbag.resetForm()
  }

  const onDelete = () => deleteLink(link)

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      {({ dirty }) => (
        <Form>
          <Box className={classes.root}>
            <Field
              name="name"
              required
              className={clsx(classes.field, classes.linkName)}
              placeholder={t('enterLinkName')}
            />
            <Field
              name="url"
              required
              className={clsx(classes.field, classes.link)}
              placeholder={t('enterLinkUrl')}
            />

            {creating || updating || deleting ? (
              <LoadingSpinner thickness={5} />
            ) : dirty ? (
              <IconButton disableRipple disableFocusRipple type="submit">
                <CheckCircleIcon />
              </IconButton>
            ) : link ? (
              <IconButton onClick={onDelete}>
                <Delete />
              </IconButton>
            ) : (
              <IconButton onClick={handleCancel}>
                <CancelIcon />
              </IconButton>
            )}
          </Box>
        </Form>
      )}
    </Formik>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(1),
      '& .MuiIconButton-root': {
        padding: 0,
      },
    },
    field: {
      marginRight: theme.spacing(1),
      borderRadius: 4,
      paddingLeft: theme.spacing(1.5),
      border: 'none',
      backgroundColor: theme.palette.background.default,
      height: theme.spacing(4.2),
      fontSize: 12,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightRegular,
      color: theme.palette.secondary.main,
      outline: 'none',
    },
    linkName: {
      width: '30%',
    },
    link: {
      width: '65%',
    },
  })
)
