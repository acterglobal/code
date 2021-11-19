import React, { FC, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import {
  Box,
  Button,
  FormGroup,
  FormLabel,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'

import { Field, useFormikContext } from 'formik'

import { InviteFormValues } from '@acter/components/invites/form'

export const InviteByLink: FC = () => {
  const classes = useStyles()
  const [copied, setCopied] = useState(false)
  const { values } = useFormikContext<InviteFormValues>()

  return (
    <FormGroup>
      <FormLabel className={classes.label}>Invite by link</FormLabel>
      <Box className={classes.inviteLink}>
        <Field name="inviteLink" className={classes.field} />
        <CopyToClipboard
          text={values.inviteLink}
          onCopy={() => setCopied(true)}
        >
          <Button style={{ marginLeft: 10 }} className={classes.button}>
            {copied ? 'Copied' : 'Copy link'}
          </Button>
        </CopyToClipboard>
      </Box>
    </FormGroup>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inviteLink: {
      display: 'flex',
      marginBottom: theme.spacing(7),
    },
    label: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '0.85rem',
      color: theme.palette.secondary.main,
      marginBottom: theme.spacing(1),
    },
    field: {
      width: '100%',
      minHeight: theme.spacing(4.5),
      borderRadius: theme.spacing(0.6),
      border: '0.5px solid',
      borderColor: theme.palette.secondary.light,
      color: theme.palette.secondary.dark,
      marginBottom: theme.spacing(1.5),
      padding: theme.spacing(1),
      outline: 'none',
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightLight,
      fontSize: '0.8rem',
    },
    button: {
      borderRadius: theme.spacing(0.6),
      minWidth: theme.spacing(11),
      height: theme.spacing(4.5),
      color: theme.palette.primary.main,
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: '0.75rem',
    },
  })
)
