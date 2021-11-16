import React, { FC } from 'react'

import { useFormikContext } from 'formik'

import {
  Button,
  ButtonsContainer,
  ButtonsContainerRight,
} from '@acter/components/styled'

type SubmitButtonAlignment = 'left' | 'right'

export interface FormButtonsProps {
  saveText?: string
  cancelText?: string
  align: SubmitButtonAlignment
  hideUnlessDirty?: boolean
  onCancel?: () => void
}

export const FormButtons: FC<FormButtonsProps> = ({
  saveText = 'Save',
  cancelText = 'Cancel',
  align = 'left',
  hideUnlessDirty = false,
  onCancel,
}) => {
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
        {cancelText}
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{ color: 'white' }}
        disabled={isSubmitting}
        type="submit"
      >
        {saveText}
      </Button>
    </Container>
  )
}
