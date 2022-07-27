import React, { FC } from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core'

import clsx from 'clsx'
import { useFormikContext } from 'formik'

import {
  Button,
  ButtonsContainer,
  ButtonsContainerRight,
} from '@acter/components/styled'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { capitalize } from '@acter/lib/string/capitalize'

type SubmitButtonAlignment = 'left' | 'right'

export interface FormButtonsProps {
  saveText?: string
  cancelText?: string
  align: SubmitButtonAlignment
  hideUnlessDirty?: boolean
  onCancel?: () => void
}

export const FormButtons: FC<FormButtonsProps> = ({
  saveText = 'save',
  cancelText = 'cancel',
  align = 'left',
  hideUnlessDirty = false,
  onCancel,
}) => {
  const classes = useStyles()
  const { t } = useTranslation('common')
  const Container = align === 'left' ? ButtonsContainer : ButtonsContainerRight
  const { dirty, isSubmitting, resetForm } = useFormikContext()
  if (hideUnlessDirty && !dirty) return null

  const handleClick = () => {
    resetForm()
    onCancel?.()
  }

  return (
    <Container>
      <Button
        className={clsx(classes.button, classes.save)}
        variant="contained"
        color="primary"
        disabled={isSubmitting}
        type="submit"
      >
        {capitalize(t(`form.${saveText}`))}
      </Button>
      <Button
        className={clsx(classes.button, classes.cancel)}
        color="primary"
        variant="outlined"
        disabled={isSubmitting}
        onClick={handleClick}
      >
        {capitalize(t(cancelText))}
      </Button>
    </Container>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      borderRadius: 5,
    },
    save: {
      color: theme.colors.white,
    },
    cancel: {
      color: theme.palette.primary.main,
      backgroundColor: theme.colors.white,
      border: '1px solid',
      '&:hover': {
        backgroundColor: theme.colors.white,
        border: '1px solid',
      },
    },
  })
)
