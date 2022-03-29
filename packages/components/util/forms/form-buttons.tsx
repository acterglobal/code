import React, { FC } from 'react'

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
        variant="outlined"
        color="primary"
        disabled={isSubmitting}
        onClick={handleClick}
      >
        {capitalize(t(cancelText))}
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{ color: 'white' }}
        disabled={isSubmitting}
        type="submit"
      >
        {capitalize(t(`form.${saveText}`))}
      </Button>
    </Container>
  )
}
